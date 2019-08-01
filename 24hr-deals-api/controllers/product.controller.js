const GenericController = require('./generic.controller');
const Product = require('../models/product.model');

class ProductController extends GenericController {
    constructor(DataBaseConnection) {
        super(DataBaseConnection, 'product');
    }

    create(req, res) {
        const productToSave = new Product(req.body);
        this.DatabaseConnection.doQuery(`INSERT INTO product (
            ProductName
            ,ProductDescription
            ,StockQuantity
            ,Price
            ,ProductImage
            ,CategoryID) VALUES (?, ?, ?, ?, ?, ?)`,
        [productToSave.ProductName
        ,productToSave.ProductDescription
        ,productToSave.StockQuantity
        ,productToSave.Price
        ,productToSave.ProductImage
        ,productToSave.CategoryID]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }

    update(req, res) {
        const productToSave = new Product(req.body);
        this.DatabaseConnection.doQuery(`UPDATE product SET
        ProductName = ?
        ,ProductDescription = ?
        ,StockQuantity = ?
        ,Price = ?
        ,ProductImage = ?
        ,CategoryID = ?
        WHERE Id = ?`,
        [productToSave.ProductName
        ,productToSave.ProductDescription
        ,productToSave.StockQuantity
        ,productToSave.Price
        ,productToSave.ProductImage
        ,productToSave.CategoryID
        ,req.params.id]
        ).then((results, fields) => {
            res.status(400).send({
                data: results
            });
        }).catch(reject=>{
            res.status(500).json({ error: reject.toString() });
        });
    }
}

module.exports = ProductController;