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

CREATE VIEW vTransactionHistory AS SELECT `user`.Id As UserId, `transaction`.Id AS TransactionId,
	`user`.FirstName, `user`.LastName,
    Product.ProductName, Category.CategoryName,
    Product.Price, Deal.Discount, calcDiscountedPrice(Product.Price, Deal.Discount) AS TransactionAmount
From transactionDeal
LEFT JOIN `transaction` ON
	transactionDeal.TransactionId = `transaction`.Id
LEFT JOIN Deal On
	transactionDeal.DealID = Deal.Id
Left JOIN `product` ON
	Deal.ProductId = Product.Id
LEFT JOIN `category` ON
	Category.Id = Product.CategoryId
LEFT JOIN `user` ON
	`transaction`.UserID = `user`.Id;
SELECT * FROM vTransactionHistory;

CREATE VIEW vTransactionOverview AS SELECT
	TransactionId, FirstName, LastName,
    SUM(Price) AS TotalPrice,
    Sum(TransactionAmount) AS TotalTransactionAmount,
    calcTotalSaved(SUM(Price), Sum(TransactionAmount)) AS TotalSaved
FROM vTransactionHistory
GROUP BY (TransactionId);
SELECT * FROM vTransactionOverview;
SELECT * FROM vTransactionHistory WHERE UserId = 1;