Create database ShoppingCartDb
use ShoppingCartDb;

Create table tblProducts(ID int Identity(1,1) Primary Key, Name VARCHAR(100), Image VARCHAR(100), ActualPrice Decimal (18, 2), DiscountedPrice Decimal(18,2));

SELECT * FROM tblProducts;

INSERT INTO tblProducts(Name,Image,ActualPrice,DiscountedPrice)
Values('DancingToy', 'DancingToy.jpg',115.00,60.00);

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('Mirror','Mirror.jpg', 195.00,95.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('Dress', 'Dress.jpeg',995.00, 940.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('Shoes', 'Shoes.jpeg',195.00, 95.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('FlowerPot', 'FlowerPot.jpg',95.00, 40.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('Shirt','Shirt.jpg',565.00, 525.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('BedSpread', 'BedSpread.jpg',915.00, 750.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('TV', 'TV.jpg',8036.00, 7084.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('Bags', 'Bags.jpg',396.00, 284.00)

INSERT INTO tblProducts (Name, Image, ActualPrice, DiscountedPrice)
Values('Mobile', 'Mobile.jpg',15036.00, 13084.00)
Create table Cart(ID int Identity(1,1) Primary Key, ProductId INT);

SELECT * FROM Cart;

select P.ID, P.Name,P.Image,P.ActualPrice,P.DiscountedPrice from Cart C Inner Join tblProducts P
 ON C.ProductId = P.ID;

 SELECT * FROM Cart;
 select * from tblProducts;
  truncate table Cart;
 DELETE FROM Cart WHERE ProductId=10;

