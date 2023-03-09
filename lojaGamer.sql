-- Active: 1678384858775@@127.0.0.1@3306




CREATE TABLE gamers(
    id TEXT PRIMARY KEY UNIQUE  NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL, 
    platform TEXT NOT NULL

);
DROP TABLE gamers;

INSERT INTO gamers(id, name, price, platform)
VALUES("a01", "COD", 300, "battle.net" ),
("a02", "FIFA23", 350, "steam"),
("a03", "counter-strike", 0 , "steam"),
("a04", "PUBG", 35, "steam"),
("a05", "AOM", 70, "steam"),
("a06", "APEX LEGENDS
", 0, "steam");


SELECT * FROM gamers;







