const GenericController = require('./generic.controller');
const Deal = require('../models/deal.model');

class DealController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, 'deal');
    }

    create(req, res) {
        const dealToSave = new Deal(req.body);
        this.DatabaseConnection.doQuery(`INSERT INTO deal (ProductId
            ,DealStartDate
            ,DealEndDate
            ,Discount
            ,CreationDate) VALUES (?, ?, ?, ?, ?)`,
        [dealToSave.ProductId
            ,dealToSave.DealStartDate
            ,dealToSave.DealEndDate
            ,dealToSave.Discount
            ,dealToSave.CreationDate]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }

    update(req, res) {
        const dealToSave = new Deal(req.body);
        this.DatabaseConnection.doQuery(`UPDATE deal SET
        ProductId = ?
        ,DealStartDate = ?
        ,DealEndDate = ?
        ,Discount = ?
        ,CreationDate = ?
        WHERE Id = ?`,
        [dealToSave.ProductId
            ,dealToSave.DealStartDate
            ,dealToSave.DealEndDate
            ,dealToSave.Discount
            ,dealToSave.CreationDate
            ,req.params.id]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }

    getProduct(req, res) {
        this.DatabaseConnection.doQuery(`call getDealInfoByDealId(?)`, [req.params.dealId]).then((results, fields) => {
            if (results.length){
                res.status(200).send({
                    data: results
                });
            }else{
                res.status(204).send()
            }
        });
    }

    getAllProductInfo(req, res) {
        this.DatabaseConnection.doQuery(`SELECT
        dl.Id DealId, dl.DealStartDate, dl.DealEndDate, dl.CreationDate, dl.Discount,
        pd.ProductName, pd.ProductDescription, pd.StockQuantity, pd.Price, pd.ProductImage,
        ct.CategoryName,
        calcDiscountedPrice(pd.Price, dl.Discount) DiscountedPrice,
        ct.CategoryName
        from deal as dl
        INNER JOIN  product as pd ON pd.Id = dl.ProductId
        INNER JOIN category as ct ON ct.Id = pd.CategoryId`, []).then((results, fields) => {
            if (results.length){
                res.status(200).send({
                    data: results
                });
            }else{
                res.status(204).send()
            }
        });
    }
}

module.exports = DealController;