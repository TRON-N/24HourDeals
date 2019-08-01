rootFactory = (app, dataBaseConnector, routeName) => {
    const ControllerClass = require(`../controllers/${routeName}.controller.js`);

    const controller = new ControllerClass(dataBaseConnector);

    app.post(`/${routeName}`, (req, res) => {
        try{
            controller.create(req, res);
            
        } catch(err){
            res.status(500).json({ error: err.toString() });
        } finally {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
        }
    });
    
    app.get(`/${routeName}`, (req, res) => {
        try{
            controller.findAll(req, res);
        } catch(err){
            res.status(500).json({ error: err.toString() });
        } finally {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
        }
    });

    app.get(`/${routeName}/:id`, (req, res, next) => {
        try{
            controller.findOne(req, res);
        } catch(err){
            res.status(500).json({ error: err.toString() });
        } finally {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
        }
    });

    app.put(`/${routeName}/:id`, (req, res) => {
        try{
            controller.update(req, res);
        } catch(err){
            res.status(500).json({ error: err.toString() });
        } finally {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
        }
         
    });

    app.delete(`/${routeName}/:id`, (req, res) => {
        try{
            controller.delete(req, res);
        } catch(err){
            res.status(500).json({ error: err.toString() });
        } finally {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
        }
    });
}

addHeaders = (res) => {
    
    return res;
};

module.exports = rootFactory;