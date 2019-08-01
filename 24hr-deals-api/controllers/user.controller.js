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
            ,LastName
            ,Email
            ,Password
            ,UserImage
            ,DateCreated
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [userToSave.FirstName
        ,userToSave.LastName
        ,userToSave.Email
        ,userToSave.Password
        ,userToSave.UserImage
        ,userToSave.DateCreated]
        ).then((results, fields) => {
            res.status(201).send({
                data: results
            });
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }

    update(req, res) {
        const userToSave = new User(req.body);
        this.DatabaseConnection.doQuery(`UPDATE user SET
        FirstName = ?
        ,LastName = ?
        ,Email = ?
        ,Password = ?
        ,UserImage = ?
        ,DateCreated = ?
        WHERE Id = ?`,
        [userToSave.FirstName
        ,userToSave.LastName
        ,userToSave.Email
        ,userToSave.Password
        ,userToSave.UserImage
        ,userToSave.DateCreated,
        req.params.id]
        ).then((results, fields) => {
            res.status(200).send({
                data: results
            });
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }
}

module.exports = UserController;