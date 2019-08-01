module.exports = class User {
    constructor(data) {
        this.FirstName = data.FirstName;
        this.LastName = data.LastName;
        this.Email = data.Email;
        this.Password = data.Password;
        this.UserImage = data.UserImage;
        this.DateCreated = data.DateCreated;
    }
}