DROP SCHEMA IF EXISTS Zoo;
CREATE SCHEMA Zoo;
USE Zoo;

CREATE TABLE ANIMAL (
	id_animal INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    especie VARCHAR(20),
    sexo VARCHAR(10),
    idade INT,
    localizacao VARCHAR(50)
);

CREATE TABLE GERENTES (
	id_gerente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50)
);

CREATE TABLE CUIDADORES (
	id_cuidador INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    id_gerente INT,
    FOREIGN KEY (id_gerente) REFERENCES GERENTES (id_gerente)
);

CREATE TABLE CUIDADOR_ANIMAL (
	id_cuidador INT,
    id_animal INT,
    CONSTRAINT PRIMARY KEY(id_animal, id_cuidador),
    FOREIGN KEY (id_cuidador) REFERENCES CUIDADORES (id_cuidador),
    FOREIGN KEY (id_animal) REFERENCES ANIMAL (id_animal)
);

INSERT INTO ANIMAL(nome, especie, sexo, idade, localizacao) VALUES
	('Bob', 'cachorro', 'macho', 1, 'leste'),
    ('Ze', 'gato', 'macho', 2, 'oeste'),
    ('Bela', 'gato', 'femea', 3, 'norte');
    
INSERT INTO GERENTES(nome) VALUES
    ('Andre'),
    ('Camila');
    
INSERT INTO CUIDADORES(nome, id_gerente) VALUES
	('Lara', 1),
    ('Luisa', 2);
    
INSERT INTO CUIDADOR_ANIMAL(id_cuidador, id_animal) VALUES
	(1, 1),
    (2, 2),
    (2, 3);
    