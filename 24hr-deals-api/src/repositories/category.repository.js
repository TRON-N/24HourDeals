// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

class Schema {
    constructor(list) {}
}

let categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    }
});

class Model {
    constructor() { }
    findById(id) {
        console.log("categoryModel.findById");
        return {exec: (resolve, reject) => (resolve("categoryModel.findById: " + id))};
    }
    find() {
        console.log("categoryModel.find");
        return {exec: (resolve, reject) => (resolve("categoryModel.find"))};
    }
    create(catagory) {
        console.log("categoryModel.create");
        return new Promise ((resolve, reject) => (resolve("categoryModel.create: " + JSON.stringify(catagory))));
    }
    findByIdAndUpdate() {
        console.log("categoryModel.findByIdAndUpdate");
        return new Promise ((resolve, reject) => (resolve("categoryModel.findByIdAndUpdate")));
    }
    deleteOne(id) {
        console.log("categoryModel.deleteOne");
        return new Promise ((resolve, reject) => (resolve("categoryModel.deleteOne: " + JSON.stringify(id))));
    }
}

let categoryModel = new Model();

const categoryRepo = {}

categoryRepo.categories = categoryModel;

    //********     GETS    ********

    categoryRepo.getAllCategories = () => {
        return categoryModel.find();
    }

    categoryRepo.getCategoryById = (categoryId) => {
        return categoryModel.findById(categoryId);
    }

    // categoryRepo.getCategoryByName = (categoryName) => {
    //     return categoryModel.find({name: categoryName});
    // }

    //  ********    INSERTS     ********

    categoryRepo.insertCategory = (category) => {
        return categoryModel.create(category);
    }

    //  ********    UPDATES     ********

    categoryRepo.updateCategory = (id, categoryUpdate) => {
        let func = async () => {
            let category = {};
            await categoryModel.findByIdAndUpdate(id, {
                 $set: categoryUpdate,
            }, {new: true}, (err, categoryDoc)=>{
                if (err) {
                    console.log(err);
                } else if (categoryDoc){
                    category = categoryDoc;
                }
           });
           return category;
        };
        return func();
    }

    //  ********    DELETE     ********

    categoryRepo.deleteCategory = (categoryId) => {
        return categoryModel.deleteOne({_id: categoryId});
    }

module.exports = categoryRepo;