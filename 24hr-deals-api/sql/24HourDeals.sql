create database DealSite;
CREATE USER 'Group' IDENTIFIED WITH mysql_native_password BY 'SellOut';
GRANT ALL PRIVILEGES ON DealSite.* to 'Group';
use DealSite;

create table `user` (
Id int not null auto_increment,
FirstName varchar(255) not null,
LastName varchar(255) not null,
Email varchar(255) not null,
Password varchar(128) not null,
UserImage varchar(500) not null,
DateCreated datetime(6) not null,
constraint PK_USER_ID primary key(Id),
constraint UQ_USER_EMAIL unique(email)
);
create table `transaction` (
Id int not null auto_increment,
UserID int(255) not null,
DeliveryAddress varchar(100) not null,
TransactionDate datetime not null,
constraint PK_Transaction_ID primary key(Id),
constraint PK_User_ID foreign key (UserID)
references user(Id)
on delete cascade,
index Transaction_Index (Id)
);
create table `category` (
Id int not null auto_increment,
CategoryName varchar(30) not null,
constraint PK_Category_ID primary key(Id),
index Category_Index (Id)
);
create table `product` (
Id int not null auto_increment,
ProductName varchar(255) not null,
ProductDescription varchar(500) not null,
StockQuantity int not null,
Price float not null,
ProductImage varchar(500) not null,
CategoryID int,
constraint PK_Product_ID primary key(Id),
constraint FK_Category_ID foreign key(CategoryID) 
references category(Id) 
on delete set null,
constraint UQ_Pruduct_Name unique(ProductName),
index Product_Index (Id)
);
create table `deal` (
Id int not null auto_increment,
ProductId int not null,
DealStartDate datetime not null,
DealEndDate datetime not null,
Discount int not null,
CreationDate datetime not null,
constraint PK_Deal_ID primary key(Id),
constraint FK_Product_ID foreign key(ProductID) 
references product(Id) 
on delete cascade,
index Deal_Index (Id)
);
create table `transactionDeal` (
DealID int not null,
TransactionId int not null,
constraint PK_Deal_ID_Transaction_Id primary key (DealId, TransactionId),
constraint FK_Deal_ID foreign key(DealId) references deal(Id) on delete cascade,
constraint FK_Transaction_ID foreign key(TransactionId) references transaction(Id) on delete cascade
);


Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Mikhail', 'Padayachee', 'pad@test.com', 'testing123', 'image', '1997-03-24');
Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Leonard', 'Van Gend', 'leo@what.com', 'whatabc', 'image', '1998-07-21');
Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Vaughan', 'Langman', 'Langman@ay.org', 'whatabc', 'image', '1998-07-21');
Insert into user (FirstName, LastName, Email, Password, UserImage, dateCreated) values ('Robert', 'Basson', 'Rob123@Bass.co.za', 'whatabc', 'image', '1998-07-21');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (1, '2 hell rd, hellsberg', '2019-07-30');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (2, '4 what way, whatville', '2019-07-24');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (3, '1 This is fine, flamestead', '2019-03-30');
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (4, '89 chaos street, tedstown', '2019-0-30');
insert into category (CategoryName) values ('Electronics');
insert into category (CategoryName) values ('Appliance ');
insert into category (CategoryName) values ('Clothing');
insert into category (CategoryName) values ('Entertainment');
insert into category (CategoryName) values ('Sport');
insert into category (CategoryName) values ('Beverages & Liquor');
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Headset','Electronic device for relaying sound to your ears only','10','500', 'image', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Microwave','It warms things up pretty well','15','1200', 'image', 2);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hat','Appropriate for holidays and drinking','20','200', 'image', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('PS4','Basically an Xbox','10','6000', 'image', 4);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Xbox 1','A Cheaper PS4, only just','10','5500', 'image', 4);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Cricket Bat','Can be kept near an exit in case of an emergency, swing with caution','10','600', 'image', 5);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Castle Light 6x500','Easy way to make friends','10','120', 'image', 6);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hunters Dry 6x500','Will give you acid reflux','10','150', 'image', 6);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Windhoek Lager 6x500','50% Foam','10','160', 'image', 6);
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('1','2019-03-24','2019-04-01','10','2019-03-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('1','2019-04-01','2019-04-02','15','2019-03-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('2','2019-05-06','2019-06-01','20','2019-04-20');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('3','2019-04-01','2019-04-15','15','2019-03-21');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('9','2019-03-24','2019-04-24','50','2019-03-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('9','2019-05-20','2019-05-31','50','2019-04-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('9','2019-06-16','2019-07-02','50','2019-05-15');
insert into transactionDeal (DealID,TransactionId) values ('1','1');
insert into transactionDeal (DealID,TransactionId) values ('5','1');
insert into transactionDeal (DealID,TransactionId) values ('1','2');
insert into transactionDeal (DealID,TransactionId) values ('4','2');
insert into transactionDeal (DealID,TransactionId) values ('5','2');
insert into transactionDeal (DealID,TransactionId) values ('6','3');
insert into transactionDeal (DealID,TransactionId) values ('3','4');
insert into transactionDeal (DealID,TransactionId) values ('6','4');

COMMIT;