transactionRoots = (app, dataBaseConnector) => {
    const TransactionController = require(`../controllers/transaction.controller.js`);

    const controller = new TransactionController(dataBaseConnector);

    app.get(`/user/:userId/transactionHistory`, (req, res) => {
        overview = controller.getUserTransactionHistory(req.params.userId, res);
    });

    app.get(`/transactionOverview`, (req, res) => {
        overview = controller.getTransactionOveriew(res);
    });

    app.get(`/user/:userId/transactionOverview`, (req, res) => {
        overview = controller.getUserTransactionOveriew(req.params.userId, res);
    });

    app.post(`/transaction/:transactionId/addDeal`, (req, res) => {
        controller.addDeal(req, res);
    });
    app.delete(`/transaction/:transactionId/removeDeal`, (req, res) => {
        controller.removeDeal(req, res);
    });
}

module.exports = transactionRoots;