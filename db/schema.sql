CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(255) NOT NULL,
    inhaled BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;