roots = (app, dataBaseConnector) => {
    const DealController = require(`../controllers/deal.controller.js`);

    const controller = new DealController(dataBaseConnector);

    app.get(`/deal/:dealId/getRelatedProduct`, (req, res) => {
        controller.getProduct(req, res);
    });
}

module.exports = roots;