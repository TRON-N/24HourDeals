categoryRoots = (app, dataBaseConnector) => {
    const CategoryController = require(`../controllers/category.controller.js`);

    const controller = new CategoryController(dataBaseConnector);

    app.get(`/category/:categoryName/deals`, (req, res) => {
        controller.getDeals(req, res);
    });
}

module.exports = categoryRoots;
