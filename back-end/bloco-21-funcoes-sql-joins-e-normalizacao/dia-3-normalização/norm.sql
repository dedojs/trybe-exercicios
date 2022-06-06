DROP SCHEMA IF EXISTS Normalization;
CREATE SCHEMA Normalization;
USE Normalization;

CREATE TABLE Funcionario (
	func_id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(20) NOT NULL,
    email VARCHAR(30),
    telefone VARCHAR(15),
    data_cadastro TIMESTAMP
) engine=InnoDB;

CREATE TABLE Setor (
	setor_id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(20) NOT NULL
) engine=InnoDB;

CREATE TABLE Setor_funcionario (
	setor1_id INT NOT NULL,
    func1_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(setor1_id, func1_id),
    FOREIGN KEY (setor1_id) REFERENCES Setor(setor_id),
    FOREIGN KEY (func1_id) REFERENCES Funcionario(func_id)
) engine=InnoDB;

INSERT INTO Funcionario (func_id, nome, sobrenome, email, telefone, data_cadastro) VALUES
	(1, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)99852-1445', '2020-05-05 08:50:25'),
	(2, 'Andre', 'Freeman', 'andre@1990@gmail.com', '(47)99522-4996', '2020-02-05 01:00:00'),
    (3, 'Cintia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (4, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');
    
INSERT INTO Setor(setor_id, nome) VALUES
	(1, 'administracao'),
    (2, 'vendas'),
    (3, 'operacional'),
    (4, 'estrategico'),
    (5, 'marketing');
    
INSERT INTO Setor_funcionario (setor1_id, func1_id) VALUES
	(1, 1),
    (2, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 2);
    
    

