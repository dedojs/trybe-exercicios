CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
	`Nome` varchar (10) character SET utf8,
    `Idade` int
);
INSERT INTO Escola.Estudantes VALUES
	('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    