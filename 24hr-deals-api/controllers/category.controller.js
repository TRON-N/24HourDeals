const GenericController = require('./generic.controller')

class CategoryController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, 'category');
    }
}

module.exports = CategoryController;