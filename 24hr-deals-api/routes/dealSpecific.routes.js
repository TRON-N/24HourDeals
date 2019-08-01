roots = (app, dataBaseConnector) => {
    const DealController = require(`../controllers/deal.controller.js`);

    const controller = new DealController(dataBaseConnector);

    app.get(`/deal/:dealId/getRelatedProduct`, (req, res) => {
        try{
            controller.getProduct(req, res);
        }catch(err){
            res.status(500).json({ error: err.toString() });
        }
    });

    app.get(`/getAllDealAndProductInfo`, (req, res) => {
        controller.getAllProductInfo(req, res);
    });
}

module.exports = roots;