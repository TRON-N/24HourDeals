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
        res.status(200).send({message: "get product route works!"});
    }
}

module.exports = DealController;