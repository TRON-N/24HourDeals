module.exports = class Transaction {
    constructor(data) {
        this.UserID = data.UserID;
        this.DeliveryAddress = data.DeliveryAddress;
        this.TransactionDate = data.TransactionDate;
    }
};