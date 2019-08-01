rootFactory = (app, dataBaseConnector) => {
    const TransactionController = require(`../controllers/transaction.controller.js`);

    const controller = new TransactionController(dataBaseConnector);

    app.post(`/transaction/addDeal/:transactionId`, (req, res) => {
        controller.addDeal(req, res);
    });
    app.delete(`/transaction/removeDeal/:transactionId`, (req, res) => {
        controller.removeDeal(req, res);
    });
}

module.exports = rootFactory;