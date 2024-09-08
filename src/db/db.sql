-- auto-generated definition
create table electronics
(
    id                   serial
        primary key,
    brand                varchar(100),
    model                varchar(255),
    screen_size          varchar(50),
    color                varchar(50),
    harddisk             varchar(50),
    cpu                  varchar(100),
    ram                  varchar(50),
    os                   varchar(100),
    special_features     text,
    graphics             varchar(100),
    graphics_coprocessor varchar(100),
    cpu_speed            varchar(50),
    rating               numeric(2, 1),
    price                varchar(50)
);

INSERT INTO electronics (brand, model, screen_size, color, harddisk, cpu, ram, OS, special_features, graphics, graphics_coprocessor, cpu_speed, rating, price) VALUES ('HP', 'Spectre x360 14', '13.5"', 'Nightfall Black', '512GB SSD', 'Intel Core i7', '16GB', 'Windows 11 Home', 'Touchscreen', 'Intel Iris Xe', 'Intel Iris Xe', '4.7 GHz', '4.8', '1499');
INSERT INTO electronics (brand, model, screen_size, color, harddisk, cpu, ram, OS, special_features, graphics, graphics_coprocessor, cpu_speed, rating, price) VALUES ('Apple', 'MacBook Air', '13.3"', 'Space Gray', '256GB SSD', 'Apple M1', '8GB', 'macOS', 'Touch ID', 'Apple M1', 'Apple M1', '3.2 GHz', '4.9', '999');
INSERT INTO electronics (brand, model, screen_size, color, harddisk, cpu, ram, OS, special_features, graphics, graphics_coprocessor, cpu_speed, rating, price) VALUES ('Dell', 'XPS 13', '13.4"', 'Platinum Silver', '1TB SSD', 'Intel Core i7', '16GB', 'Windows 10 Home', 'InfinityEdge Display', 'Intel Iris Xe', 'Intel Iris Xe', '4.8 GHz', '4.7', '1399');
INSERT INTO electronics (brand, model, screen_size, color, harddisk, cpu, ram, OS, special_features, graphics, graphics_coprocessor, cpu_speed, rating, price) VALUES ('Microsoft', 'Surface Laptop 4', '13.5"', 'Matte Black', '512GB SSD', 'AMD Ryzen 5', '8GB', 'Windows 10 Home', 'Touchscreen', 'AMD Radeon', 'AMD Radeon', '4.4 GHz', '4.5', '1299');
INSERT INTO electronics (brand, model, screen_size, color, harddisk, cpu, ram, OS, special_features, graphics, graphics_coprocessor, cpu_speed, rating, price) VALUES ('Asus', 'ZenBook 14', '14"', 'Pine Grey', '512GB SSD', 'Intel Core i5', '8GB', 'Windows 10 Home', 'NumberPad', 'Intel Iris Xe', 'Intel Iris Xe', '4.2 GHz', '4.6', '899');

alter table electronics
    owner to postgres;

