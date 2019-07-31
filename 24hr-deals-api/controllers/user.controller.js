const GenericController = require('./generic.controller')

class UserController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, "user");
    }
}

module.exports = UserController;