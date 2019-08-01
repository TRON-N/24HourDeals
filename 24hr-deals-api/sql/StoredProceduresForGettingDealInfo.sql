DELIMITER //
CREATE PROCEDURE getDealInfoByCategory (IN ctName CHAR(30))
BEGIN
	SELECT dl.Id DealId, dl.DealStartDate, dl.DealEndDate, dl.CreationDate, dl.Discount,
    pd.ProductName, pd.ProductDescription, pd.StockQuantity, pd.Price, pd.ProductImage,
    ct.CategoryName,
    calcDiscountedPrice(pd.Price, dl.Discount) DiscountedPrice,
    ct.CategoryName
    from deal as dl
    INNER JOIN  product as pd ON pd.Id = dl.ProductId
    INNER JOIN category as ct ON ct.Id = pd.CategoryId
    WHERE ct.CategoryName = ctName;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getDealInfoByDealId (IN dealId int)
BEGIN
	SELECT dl.Id DealId, dl.DealStartDate, dl.DealEndDate, dl.CreationDate, dl.Discount,
    pd.ProductName, pd.ProductDescription, pd.StockQuantity, pd.Price, pd.ProductImage,
    ct.CategoryName,
    calcDiscountedPrice(pd.Price, dl.Discount) DiscountedPrice,
    ct.CategoryName
    from deal as dl
    INNER JOIN  product as pd ON pd.Id = dl.ProductId
    INNER JOIN category as ct ON ct.Id = pd.CategoryId
    WHERE dl.Id = dealId;
END //
DELIMITER ;