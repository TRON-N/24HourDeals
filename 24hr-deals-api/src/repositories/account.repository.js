// const mongoose = require('mongoose');
class Schema {
    constructor(list) {}
}

// Define schema
let accountSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true
    },
    addresses: {
        type: Array
    },
    billingDetails: {
        type: Array
    },
    basket: {
        type: Array
    },
    previousTransactions: {
        type: Array
    }
});

class Model {
    constructor() { }
    create(account) {
        console.log("AccountModel.create");
        return new Promise ((resolve, reject) => (resolve("accountsssss: " + JSON.stringify(account))));
    }
    find() {
        console.log("AccountModel.find");
        return {exec: function() {return new Promise ((resolve, reject) => (resolve("findssss")));}};
    }
    deleteOne() {
        console.log("AccountModel.deleteOne");
        return {exec: function() { return new Promise ((resolve, reject) => (resolve("deleteSsss")));}};
    }
    previousTransactions() { console.log("AccountModel.previousTransactions"); }
    findById(id) {
        console.log("AccountModel.findById");
        return {exec: function() {return new Promise ((resolve, reject) => (resolve("findIdssss " + id)));}};
    }

    // findById(id, callback) {
    //     callback(null, {save: function(account) {console.log(account)}})
    // }

    findByIdAndUpdate() { console.log("AccountModel.findByIdAndUpdate"); }
}

// Compile model
let AccountModel = new Model();


const accountRepo = {}

accountRepo.accounts = AccountModel;

accountRepo.insertAccount = (account) => {
    return AccountModel.create(account);
}

accountRepo.getAllAccounts = () => {
    return AccountModel.find().exec();
};

accountRepo.getAccountById = (accountId) => {
    return AccountModel.findById(accountId).exec();
};

accountRepo.getAccountByEmail = (emailAdress) => {
    return AccountModel.find({ email: emailAdress }).exec();
}

accountRepo.getAccountByUserName = (userName) => {
    return AccountModel.find({ username: userName }).exec();
}

accountRepo.deleteAccountByUserName = (userName) => {
    return AccountModel.deleteOne({ name: userName }).exec();
};

accountRepo.deleteAccountByEmail = (emailAddress) => {
    return AccountModel.deleteOne({ email: emailAddress }).exec();
};

accountRepo.updateAccount = (account) => {
    AccountModel.findById(account.id, function (err, accountDoc) {
        if (err) return console.error(err);
        else {
            accountDoc.save(account);
        }
    })
}

accountRepo.createTransactions = (transaction) => {
    let transactions = new AccountModel.previousTransactions(transaction);
    transactions.save((err, transactions) => {
        if (err) {
            console.error(err)
            return (err);
        }
        return (transactions);
    });
};

accountRepo.getTransactions = (accountId) => {
    //Should return a Pending promise
    console.log('wud');
    let func = async () => {
        let transactionHistory = {};
        await AccountModel.findById(accountId, (err, account) => {
            if (err)
                return (err);
            transactionHistory = account.previousTransactions;
        });
        return transactionHistory;
    };
    console.log(func);
    return func();
}

accountRepo.insertTransactions = (id, transaction) => {

    let func = async () => {
        let transactions = {};
        await AccountModel.findByIdAndUpdate(id, {
            $push: transaction
        }, { new: true }, (err, account) => {
            if (err) {
                console.log(err);
            } else if (account) {
                transactions = account
            }
        });
        return transactions;
    };
    return func();
};

accountRepo.getBasket = (accountId) => {
    let func = async () => {
        let basket = {};
        await AccountModel.findById(accountId, (err, account) => {
            if (err)
                return (err);
            console.log(account.basket);
            basket = account.basket;
        });
        return basket;
    };
    return func();
};

accountRepo.updateBasket = (accountId, basket) => {
    let func = async () => {
        let basketData = {};
        const test = await AccountModel.findByIdAndUpdate(accountId, {
            $push: basket
        }, {upsert: true, new: true}, (err,account)=>{
            if (err) {
                console.log(err);
            } else if (account) {
                basketData = account
            }
        });
        return test;
    };
    return func();
};

module.exports = accountRepo;
