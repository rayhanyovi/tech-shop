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

alter table electronics
    owner to postgres;

