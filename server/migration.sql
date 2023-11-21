DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS player;

CREATE TABLE player (
    id SERIAL PRIMARY KEY,
    name TEXT,
    score INTEGER
);
INSERT INTO player (name,score) VALUES ('john',5);
INSERT INTO player (name,score) VALUES ('mike',2);
INSERT INTO player (name,score) VALUES ('jake',8);
INSERT INTO player (name,score) VALUES ('ben',9);
INSERT INTO player (name,score) VALUES ('sean',11);
INSERT INTO player (name,score) VALUES ('tyler',6);
