const GenericController = require('./generic.controller')
const Category = require('../models/category.model');

class CategoryController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, 'category');
    }

    create(req, res) {
        const categoryToSave = new Category(req.body);
        this.DatabaseConnection.doQuery(`INSERT INTO category (CategoryName) VALUES (?)`,
        [categoryToSave.CategoryName]
        ).then((results, fields) => {
            res.status(200).send({
                data: results
            });
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }

    update(req, res) {
        const categoryToSave = new Category(req.body);
        this.DatabaseConnection.doQuery(`UPDATE category SET
        CategoryName = ?
        WHERE Id = ?`,
        [categoryToSave.CategoryName,  req.params.id]
        ).then((results, fields) => {
            res.status(200).send({
                data: results
            });
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }

    getDeals(req, res) {
        this.DatabaseConnection.doQuery(`call getDealInfoByCategory(?)`, [req.params.categoryName]).then((results, fields) => {
            if (results.length){
                res.status(200).send({
                    data: results
                });
            }else{
                res.status(204).send()
            }
        });
    }
}

module.exports = CategoryController;