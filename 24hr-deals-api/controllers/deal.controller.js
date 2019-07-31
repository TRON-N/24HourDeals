const GenericController = require('./generic.controller')

class DealController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, 'deal');
    }
}

module.exports = DealController;