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

    addDeal(req, res) {
        this.DatabaseConnection.doQuery(`INSERT INTO transactionDeal (TransactionId, DealId) VALUES (?, ?)`,
        [req.params.transactionId, req.body.dealId]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }

    removeDeal(req, res) {
        this.DatabaseConnection.doQuery(`DELETE FROM transactionDeal WHERE TransactionId = ? AND DealId = ?`,
        [req.params.transactionId, req.body.dealId]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }

    getUserTransactionHistory(userId, res) {
        let data;
        this.DatabaseConnection.doQuery(`SELECT * FROM vTransactionHistory WHERE UserId = ?`, [userId])
        .then((results, fields) => {
            res.status(200).send(results);
        })
        .catch((results, fields) => {
            res.status(500).send({error: 'oof',
        description: results});
        });
        return data;
    }
}

module.exports = TransactionController;