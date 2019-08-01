module.exports = class Deal {
    constructor(data) {
        this.ProductId = data.ProductId;
        this.DealStartDate = data.DealStartDate;
        this.DealEndDate = data.DealEndDate;
        this.Discount = data.Discount;
        this.CreationDate = data.CreationDate;
    }
};