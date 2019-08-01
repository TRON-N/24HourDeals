const express = require('express');
const bodyParser = require('body-parser');
const rootFactory = require('./routes/routeFactory.routes');
const DatabaseConnection = require('./database/database.connection')

const port = 8080;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    console.log('here mofo');
    res.json({"message": "the api works!"});
})


rootFactory(app, DatabaseConnection, "user");
rootFactory(app, DatabaseConnection, "transaction");
rootFactory(app, DatabaseConnection, "product");
rootFactory(app, DatabaseConnection, "category");
rootFactory(app, DatabaseConnection, "deal");

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})