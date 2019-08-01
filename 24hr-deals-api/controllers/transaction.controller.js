const GenericController = require('./generic.controller');
const Transaction = require('../models/transaction.model');

class TransactionController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, 'transaction');
    }

    create(req, res) {
        const transactionToSave = new Transaction(req.body);
        this.DatabaseConnection.doQuery(`INSERT INTO transaction (UserID, DeliveryAddress, TransactionDate) VALUES (?, ?, ?)`,
        [transactionToSave.UserID, transactionToSave.DeliveryAddress, transactionToSave.TransactionDate]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }

    update(req, res) {
        const transactionToSave = new Transaction(req.body);
        this.DatabaseConnection.doQuery(`UPDATE transaction SET
        UserID = ?,
        DeliveryAddress = ?,
        TransactionDate = ?
        WHERE Id = ?`,
        [transactionToSave.UserID, transactionToSave.DeliveryAddress, transactionToSave.TransactionDate, req.params.id]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }
}

module.exports = TransactionController;