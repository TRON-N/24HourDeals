const GenericController = require('./generic.controller');
const User = require('../models/user.model');

class UserController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, "user");
    }

    create(req, res) {
        const userToSave = new User(req.body);
        this.DatabaseConnection.doQuery(`INSERT INTO user (
            FirstName
            ,Surname
            ,Email
            ,Password
            ,UserImage
            ,DateCreated
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [userToSave.FirstName
        ,userToSave.Surname
        ,userToSave.Email
        ,userToSave.Password
        ,userToSave.UserImage
        ,userToSave.DateCreated]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }

    update(req, res) {
        const userToSave = new User(req.body);
        this.DatabaseConnection.doQuery(`UPDATE user SET
        FirstName = ?
        ,Surname = ?
        ,Email = ?
        ,Password = ?
        ,UserImage = ?
        ,DateCreated = ?
        WHERE Id = ?`,
        [userToSave.FirstName
        ,userToSave.Surname
        ,userToSave.Email
        ,userToSave.Password
        ,userToSave.UserImage
        ,userToSave.DateCreated,
        req.params.id]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }
}

module.exports = UserController;