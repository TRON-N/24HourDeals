transactionRoots = (app, dataBaseConnector) => {
    const TransactionController = require(`../controllers/transaction.controller.js`);

    const controller = new TransactionController(dataBaseConnector);

    app.post(`/transaction/:transactionId/addDeal`, (req, res) => {
        controller.addDeal(req, res);
    });
    app.delete(`/transaction/:transactionId/removeDeal`, (req, res) => {
        controller.removeDeal(req, res);
    });
}

module.exports = transactionRoots;