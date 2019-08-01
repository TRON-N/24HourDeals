const express = require('express');
const bodyParser = require('body-parser');
const rootFactory = require('./routes/routeFactory.routes');
const DatabaseConnection = require('./database/database.connection');
const transactionSpecificRoutes = require('./routes/transactionSpecific.routes');
const dealSpecificRoutes = require('./routes/dealSpecific.routes');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"message": "the api works!"});
})


rootFactory(app, DatabaseConnection, "user");
rootFactory(app, DatabaseConnection, "transaction");
rootFactory(app, DatabaseConnection, "product");
rootFactory(app, DatabaseConnection, "category");
rootFactory(app, DatabaseConnection, "deal");
transactionSpecificRoutes(app, DatabaseConnection);
dealSpecificRoutes(app, DatabaseConnection);


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})