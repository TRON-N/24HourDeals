create database DealSite;
-- create user 'Group' identified by 'SellOut';
-- grant all privileges on DealSite.* to 'Group';
use DealSite;
create table User (
Id int not null auto_increment,
FirstName varchar(255) not null,
Surname varchar(255) not null,
Email varchar(255) not null,
Password varchar(128) not null,
UserImage varchar(500) not null,
dateCreated datetime(6) not null,
constraint PK_USER_ID primary key(Id),
constraint UQ_USER_EMAIL unique(email)
);
create table Transaction (
Id int not null auto_increment,
UserID int(255) not null,
DeliveryAddress varchar(100) not null,
TransactionDate datetime not null,
constraint PK_Transaction_ID primary key(Id),
constraint PK_User_ID foreign key (UserID)
references User(Id)
on delete cascade,
index Transaction_Index (Id)
);
create table Category (
Id int not null auto_increment,
CategoryName varchar(30) not null,
constraint PK_Category_ID primary key(Id),
index Category_Index (Id)
);
create table Product (
Id int not null auto_increment,
ProductName varchar(255) not null,
ProductDescription varchar(500) not null,
StockQuantity int not null,
Price float not null,
ProductImage varchar(500) not null,
CategoryID int,
constraint PK_Product_ID primary key(Id),
constraint FK_Category_ID foreign key(CategoryID) 
references Category(Id) 
on delete set null,
constraint UQ_Pruduct_Name unique(ProductName),
index Product_Index (Id)
);
create table Deal(
Id int not null auto_increment,
ProductId int not null,
DealStartDate datetime not null,
DealEndDate datetime not null,
Discount int not null,
CreationDate datetime not null,
constraint PK_Deal_ID primary key(Id),
constraint FK_Product_ID foreign key(ProductID) 
references Product(Id) 
on delete cascade,
index Deal_Index (Id)
);
create table TransactionDeal (
DealID int not null,
TransactionId int not null,
constraint PK_Deal_ID_Transaction_Id primary key (DealId, TransactionId),
constraint FK_Deal_ID foreign key(DealId) references Deal(Id) on delete cascade,
constraint FK_Transaction_ID foreign key(TransactionId) references Transaction(Id) on delete cascade
);
CREATE VIEW vTransaction
AS SELECT FirstName, LastName, DeliveryAddress, TransactionDate
FROM User, Transaction
where User.UserId = Transaction.UserId;
Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Mikhail', 'Padayachee', 'pad@test.com', 'testing123', 'image', '1997-03-24');
Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Leonard', 'Van Gend', 'leo@what.com', 'whatabc', 'image', '1998-07-21');
Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Vaughan', 'Langman', 'Langman@ay.org', 'whatabc', 'image', '1998-07-21');
Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Robert', 'Basson', 'Rob123@Bass.co.za', 'whatabc', 'image', '1998-07-21');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (1, '2 hell rd, hellsberg', '2019-07-30');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (2, '4 what way, whatville', '2019-07-24');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (3, '1 This is fine, flamestead', '2019-03-30');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (4, '89 chaos street, tedstown', '2019-0-30');
insert into Category (CategoryName) values ('Electronics');
insert into Category (CategoryName) values ('Appliance ');
insert into Category (CategoryName) values ('Clothing');
insert into Category (CategoryName) values ('Entertainment');
insert into Category (CategoryName) values ('Sport');
insert into Category (CategoryName) values ('Beverages & Liquor');
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Headset','Electronic device for relaying sound to your ears only','10','500', 'image', 1);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Microwave','It warms things up pretty well','15','1200', 'image', 2);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hat','Appropriate for holidays and drinking','20','200', 'image', 3);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('PS4','Basically an Xbox','10','6000', 'image', 4);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Xbox 1','A Cheaper PS4, only just','10','5500', 'image', 4);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Cricket Bat','Can be kept near an exit in case of an emergency, swing with caution','10','600', 'image', 5);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Castle Light 6x500','Easy way to make friends','10','120', 'image', 6);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hunters Dry 6x500','Will give you acid reflux','10','150', 'image', 6);
insert into Product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Windhoek Lager 6x500','50% Foam','10','160', 'image', 6);