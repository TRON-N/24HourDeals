class GenericController {
    constructor(DatabaseConnection, tableName) {
        this.DatabaseConnection = DatabaseConnection;
        this.tableName = tableName;
    }

    create (req, res) {
        return res.status(201).send({
            message: "the api worked!"
        });
    }
    
    findAll (req, res) {
        this.DatabaseConnection.doQuery(`SELECT * FROM ${this.tableName}`, []).then((results, fields) => {
            if (results.length){
                res.status(200).send({
                    data: results
                });
            }else{
                res.status(204).send()
            }
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }

    findOne (req, res) {
        this.DatabaseConnection.doQuery(`SELECT * FROM ${this.tableName} WHERE ID = ?`, [req.params.id]).then((results, fields) => {
            if (results.length){
                res.status(200).send({
                    data: results
                });
            }else{
                res.status(204).send()
            }
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }

    update (req, res) {
        return res.status(200).send({
            message: "the api worked!"
        });
    }
    
    delete (req, res) {
        this.DatabaseConnection.doQuery(`DELETE FROM ${this.tableName} WHERE ID = ?`, [req.params.id]).then((results, fields) => {
            if (results.AffectedRows){
                res.status(204).send();
            }else{
                res.status(404).send();
            }
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }
}

module.exports = GenericController;