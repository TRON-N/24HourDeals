// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

class Schema {
    constructor(list) {}
}

// Define schema
let productSchema = new Schema ({
    name : {
        type: String,
        //required: true
    },
    description : {
        type: String
    },
    price : {
        type : Number,
        //required : true
    },
    stock : {
        type : Number
    },
    dealEndTime : {
        type : String
    },
    categories : {
        type : []
    }

});

class Model {
    constructor() { }
    find() {
        console.log("productModel.find");
        return {exec: function() {return new Promise ((resolve, reject) => (resolve("productModel.find")));}};
    }
    create(product) {
        console.log("productModel.create");
        return {exec: function() {return new Promise ((resolve, reject) => (resolve("productModel.create: " + JSON.stringify(product))));}};
    }
    findById(id) {
        console.log("productModel.findById");
        return {exec: function() {return new Promise ((resolve, reject) => (resolve("productModel.findById: " + id)));}};
    }
    findByIdAndRemove() {
        console.log("productModel.findByIdAndRemove");
        return {exec: function() {return new Promise ((resolve, reject) => (resolve("productModel.findByIdAndRemove")));}};
    }
}


let productModel = new Model();

class ProductRepo {
    constructor(){
        this.model = productModel;
    }

    getAllProducts() {
        return productModel.find().exec();
    };

    getProductsById(id) {
        return productModel.findById(id).exec();
    };

    insertProduct(product) {
        return productModel.create(product).exec();
    };

    updateProduct(update) {
        productModel.findById(update.id, function(err, productDoc) {
            if (err) return console.error(err);
            else {
                productDoc.save(update);
            }
        })
    }

    deleteProduct(product){
        var id = product.id;
        productModel.findByIdAndRemove(id).exec();
    }
}

const productRepo = new ProductRepo();
module.exports = productRepo;


