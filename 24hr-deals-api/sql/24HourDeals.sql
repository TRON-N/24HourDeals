create database DealSite;
CREATE USER 'Group' IDENTIFIED WITH mysql_native_password BY 'SellOut@123';
GRANT ALL PRIVILEGES ON DealSite.* to 'Group';
use DealSite;

create table `user` (
Id int UNIQUE not null auto_increment,
FirstName varchar(255) not null,
LastName varchar(255) not null,
Email varchar(255) UNIQUE not null,
Password varchar(128) not null,
UserImage varchar(500) not null,
DateCreated datetime(6) not null,
constraint PK_USER_ID primary key(Id),
constraint UQ_USER_EMAIL unique(email)
);

create table `transaction` (
Id int UNIQUE not null auto_increment,
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
Id int UNIQUE not null auto_increment,
CategoryName varchar(30) UNIQUE not null,
constraint PK_Category_ID primary key(Id),
index Category_Index (Id)
);

create table `product` (
Id int UNIQUE not null auto_increment,
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
Id int UNIQUE not null auto_increment,
ProductId int UNIQUE not null,
DealStartDate datetime not null,
DealEndDate datetime not null,
Discount tinyint not null,
CreationDate datetime not null,
constraint PK_Deal_ID primary key(Id),
constraint CHK_Discount CHECK (Discount > 0 AND Discount <= 100),
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
insert into transaction (UserId, DeliveryAddress, TransactionDate) values (4, '89 chaos street, tedstown', '2019-03-30');
insert into category (CategoryName) values ('Electronics');
insert into category (CategoryName) values ('Appliance');
insert into category (CategoryName) values ('Clothing');
insert into category (CategoryName) values ('Entertainment');
insert into category (CategoryName) values ('Sport');
insert into category (CategoryName) values ('Beverages & Liquor');
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Headset','Electronic device for relaying sound to your ears only','10','750', 'https://m.media-amazon.com/images/S/aplus-media/vc/a9887957-c7e8-415f-8be9-8b74cedcc0bf._CR0,0,800,600_PT0_SX800__.jpg', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Samsung Galaxy S9','Like the iPhone but slightly cheaper and better','50','9999999', 'https://trademe.tmcdn.co.nz/photoserver/full/954520413.jpg', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Huawei P20','A decently priced phone','100','8000', 'https://www.komplett.no/img/p/800/cd61c7da-8e1c-f8c8-dd22-8f9ca1de5f33.jpg', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('iPhone X','Unnecessarily expensive and crappier Samsung','10','99999999', 'https://cdn.dribbble.com/users/1624253/screenshots/3803694/preview.png', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Microwave','It warms things up pretty well','15','1200', 'https://www.4home.co.za/images/stories/virtuemart/product/LG%2025L%20NeoChef%E2%84%A2%20Black%20Microwave%20with%20Smart%20Inverter%20(MS2535GIS).jpg', 2);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Oven','It warms things up but slower than the microwave using more electricity','15','5200', 'https://eionline.co.za/wp-content/uploads/2018/07/ASG96MFTDI.jpg', 2);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hat','Appropriate for holidays and drinking','20','200', 'https://cdn.discordapp.com/attachments/590194306271412262/606554720190070814/product-image-268463103.png', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Shoes','Appropriate for most work environments','25','450', 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2018/02/Skechers-Go-Golf-Pro-v3.jpg', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Toe Shoes','Makes you a better dev, toe socks not included','25','450', 'http://www.a-hara.com/images/pic/N9fQHBGD-661.jpg', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Shirt','Appropriate for most situations','25','150', 'https://cdn.dribbble.com/users/1971934/screenshots/4390655/asset_1.png', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('PS4','Basically an Xbox','10','6000', 'https://consolerepairsuk.com/wp-content/uploads/2019/04/ps4.jpg', 4);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Xbox 1','A Cheaper PS4, only just','10','5500', 'https://trademe.tmcdn.co.nz/photoserver/full/1003798134.jpg', 4);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Cricket Bat','Can be kept near an exit in case of an emergency, swing with caution','10','600', 'https://mbmalikonlinestore.com/image/cache/catalog/products/bats/GLADIATOR%20BAT/03-800x600.jpg', 5);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Baseball Bat','Like a round foreign cricket bat','10','750', 'https://tshop.r10s.com/79b/d16/a4d6/a240/7099/3e64/71b0/11d8e88dc654ab3a295add.jpg', 5);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Castle Light 6x500','Easy way to make friends','10','120', 'https://lippys.co.za/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTLELITE_1.png', 6);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hunters Dry 6x500','Will give you acid reflux','10','150', 'https://media.takealot.com/covers_tsins/44172117/41405471_11-pdpxl.jpg', 6);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Windhoek Lager 6x500','50% Foam','10','160', 'https://www.oaksncorks.com/wp-content/uploads/windhoek-lager.png', 6);
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('1','2019-08-01','2019-08-11','10','2019-03-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('2','2019-08-01','2019-08-04','15','2019-03-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('3','2019-08-01','2019-08-08','20','2019-04-20');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('4','2019-08-01','2019-08-15','15','2019-03-21'); 
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('5','2019-08-01','2019-09-24','50','2019-03-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('6','2019-08-01','2019-08-31','50','2019-04-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('7','2019-08-01','2019-09-02','50','2019-05-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('8','2019-08-01','2019-09-02','50','2019-05-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('9','2019-08-01','2019-09-02','50','2019-05-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('10','2019-08-01','2019-09-02','50','2019-05-15');
insert into deal (ProductId, DealStartDate, DealEndDate, Discount, CreationDate) values ('11','2019-08-01','2019-09-02','50','2019-05-15');
insert into transactionDeal (DealID,TransactionId) values ('1','1');
insert into transactionDeal (DealID,TransactionId) values ('5','1');
insert into transactionDeal (DealID,TransactionId) values ('1','2');
insert into transactionDeal (DealID,TransactionId) values ('4','2');
insert into transactionDeal (DealID,TransactionId) values ('5','2');
insert into transactionDeal (DealID,TransactionId) values ('6','3');
insert into transactionDeal (DealID,TransactionId) values ('3','4');
insert into transactionDeal (DealID,TransactionId) values ('6','4');

COMMIT;