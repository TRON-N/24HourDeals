const GenericController = require('./generic.controller')

class ProductController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, 'product');
    }
}

module.exports = ProductController;