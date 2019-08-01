rootFactory = (app, dataBaseConnector, routeName) => {
    const ControllerClass = require(`../controllers/${routeName}.controller.js`);

    const controller = new ControllerClass(dataBaseConnector);

    app.post(`/${routeName}`, (req, res) => {
        controller.create(req, res);
    });
    app.get(`/${routeName}`, (req, res) => {
        controller.findAll(req, res);
    });
    app.get(`/${routeName}/:id`, (req, res, next) => {
        controller.findOne(req, res);
    });
    app.put(`/${routeName}/:id`, (req, res) => {
        controller.update(req, res);      
    });
    app.delete(`/${routeName}/:id`, (req, res) => {
        controller.delete(req, res);
    });
}

module.exports = rootFactory;