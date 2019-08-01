class GenericController {
    constructor(DatabaseConnection, tableName) {
        this.DatabaseConnection = DatabaseConnection;
        this.tableName = tableName;
    }

    create (req, res) {
        return res.status(400).send({
            message: "the api worked!"
        });
    }
    findAll (req, res) {
        this.DatabaseConnection.doQuery(`SELECT * FROM ${this.tableName}`, []).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }
    findOne (req, res) {
        this.DatabaseConnection.doQuery(`SELECT * FROM ${this.tableName} WHERE ID = ?`, [req.params.id]).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }
    update (req, res) {
        return res.status(400).send({
            message: "the api worked!"
        });
    }
    delete (req, res) {
        this.DatabaseConnection.doQuery(`DELETE FROM ${this.tableName} WHERE ID = ?`, [req.params.id]).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        });
    }
}

module.exports = GenericController;