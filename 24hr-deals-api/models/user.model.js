module.exports = class User {
    constructor(data) {
        this.FirstName = data.FirstName;
        this.Surname = data.Surname;
        this.Email = data.Email;
        this.Password = data.Password;
        this.DateCreated = data.DateCreated;
    }
}