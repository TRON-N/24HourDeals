const express = require('express');
const bodyParser = require('body-parser');
const rootFactory = require('./routes/routeFactory.routes');
const DatabaseConnection = require('./database/database.connection');
const transactionSpecificRoutes = require('./routes/transactionSpecific.routes');
const dealSpecificRoutes = require('./routes/dealSpecific.routes');
const categorySpecificRoutes = require('./routes/categorySpecific.routes');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use(function(err, req, res, next) {
    // our function to catch errors from body-parser
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
      // do your own thing here 👍
      res.status(400).send({ code: 400, message: "bad request check input data" });
    } else next();
  });

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
categorySpecificRoutes(app, DatabaseConnection);


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})