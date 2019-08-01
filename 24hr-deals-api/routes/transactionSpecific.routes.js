transactionRoots = (app, dataBaseConnector) => {
    const TransactionController = require(`../controllers/transaction.controller.js`);

    const controller = new TransactionController(dataBaseConnector);

    app.post(`/transaction/:transactionId/addDeal`, (req, res) => {
        try{
            controller.addDeal(req, res);
        }catch(err){
            res.status(500).json({ error: err.toString() });
        }
    });
    app.delete(`/transaction/:transactionId/removeDeal`, (req, res) => {
        try{
            controller.removeDeal(req, res);
        }catch(err){
            res.status(500).json({ error: err.toString() });
        }
    });
}

module.exports = transactionRoots;