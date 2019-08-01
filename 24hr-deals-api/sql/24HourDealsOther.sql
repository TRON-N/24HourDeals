-- User defined functions

SET GLOBAL log_bin_trust_function_creators = 1;

DELIMITER //
CREATE FUNCTION calcDiscountedPrice(Price INT, Discount INT)  
RETURNS FLOAT 
BEGIN  
    DECLARE DiscountedPrice FLOAT;  
    SET DiscountedPrice = Price * (1 - (Discount / 100));
    RETURN DiscountedPrice;  
END //
DELIMITER ;

DELIMITER //
CREATE FUNCTION calcTotalSaved(OriginalPrice INT, DiscountedPrice INT)  
RETURNS FLOAT 
BEGIN  
    DECLARE TotalSaved FLOAT;  
    SET TotalSaved = OriginalPrice - DiscountedPrice;
    RETURN TotalSaved;  
END //
DELIMITER ;

-- Views

CREATE VIEW vTransactionHistory AS SELECT User.Id As UserId, Transaction.Id AS TransactionId,
	User.FirstName, User.LastName,
    Product.ProductName, Category.CategoryName,
    Product.Price, Deal.Discount, calcDiscountedPrice(Product.Price, Deal.Discount) AS TransactionAmount
From TransactionDeal
LEFT JOIN Transaction ON
	TransactionDeal.TransactionId = Transaction.Id
LEFT JOIN Deal On
	TransactionDeal.DealID = Deal.Id
Left JOIN Product ON
	Deal.ProductId = Product.Id
LEFT JOIN Category ON
	Category.Id = Product.CategoryId
LEFT JOIN User ON
	Transaction.UserID = User.Id;
SELECT * FROM vTransactionHistory;

CREATE VIEW vTransactionOverView AS SELECT
	TransactionId, FirstName, LastName,
    SUM(Price) AS TotalPrice,
    Sum(TransactionAmount) AS TotalTransactionAmount,
    calcTotalSaved(SUM(Price), Sum(TransactionAmount)) AS TotalSaved
FROM vTransactionHistory
GROUP BY (TransactionId);
SELECT * FROM vTransactionOverview;