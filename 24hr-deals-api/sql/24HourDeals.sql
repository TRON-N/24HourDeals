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
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Headset','Electronic device for relaying sound to your ears only','10','750', 'https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/c96a280f94e22e3ee3823dd0a1a87606/0/1/01_051-049_hero.png', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Samsung Galaxy S9','Like the iPhone but slightly cheaper and better','50','99999999', 'https://i.gadgets360cdn.com/products/large/1519585124_635_samsung_galaxy_s9_blue.jpg', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Huawei P20','A decently priced phone','100','8000', 'https://image2.geekbuying.com/ggo_pic/2018-04-09/HUAWEI-P20-Pro-6-1-Inch-6GB-64GB-Smartphone-Cherry-Pink-Gold-611521-.jpg', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('iPhone X','Unnecessarily expensive and carppier Samsung','10','999999999', 'https://images.kogan.com/image/fetch/s--VG0ZdC_b--/b_white,c_pad,f_auto,h_502,q_auto:good,w_753/https://assets.kogan.com/files/product/HKI/apple/IphoneX_GRY.jpg', 1);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Microwave','It warms things up pretty well','15','1200', 'https://i5.walmartimages.ca/images/Large/387/395/31387395.jpg', 2);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Oven','It warms things up but slower than the microwave using more electricity','15','5200', 'https://secure.img1-fg.wfcdn.com/im/15353498/compr-r85/6083/60833868/36-38-cu-ft-free-standing-dual-fuel-range.jpg', 2);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hat','Appropriate for holidays and drinking','20','200', 'https://www.villagehatshop.com/photos/product/standard/4511390S61126/all/mid-crown-wool-felt-top-hat.jpg', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Shoes','Appropriate for most work environments','25','450', 'https://n1.sdlcdn.com/imgs/h/1/7/Wdl-Sneakers-Red-Casual-Shoes-SDL039762466-1-2a564.jpg', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Shirt','Appropriate for most situations','25','150', 'https://res.cloudinary.com/teepublic/image/private/s--ClJ7H5ai--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1545898254/production/designs/3829959_0.jpg', 3);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('PS4','Basically an Xbox','10','6000', 'https://gamespot1.cbsistatic.com/uploads/screen_large/1593/15930215/3565353-ps4.jpg', 4);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Xbox 1','A Cheaper PS4, only just','10','5500', 'https://dlb99j1rm9bvr.cloudfront.net/xbox-one-x-painted/parts/angle-1/model/size-2000/bg.png', 4);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Cricket Bat','Can be kept near an exit in case of an emergency, swing with caution','10','600', 'https://images-na.ssl-images-amazon.com/images/I/61wrEMA7OlL._SL1200_.jpg', 5);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Baseball Bat','Like a round foreign cricket bat','10','750', 'https://i.ebayimg.com/images/g/qaAAAOSwf9ta~Vhw/s-l300.jpg', 5);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Castle Light 6x500','Easy way to make friends','10','120', 'https://lippys.co.za/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTLELITE_1.png', 6);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Hunters Dry 6x500','Will give you acid reflux','10','150', 'https://media.takealot.com/covers_tsins/44172117/41405471_11-pdpxl.jpg', 6);
insert into product (ProductName, ProductDescription, StockQuantity, Price, ProductImage, CategoryId) values ('Windhoek Lager 6x500','50% Foam','10','160', 'https://www.oaksncorks.com/wp-content/uploads/windhoek-lager.png', 6);
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