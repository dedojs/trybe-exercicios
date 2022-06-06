DROP SCHEMA IF EXISTS boteco_ze;
CREATE SCHEMA boteco_ze;
USE boteco_ze;

CREATE TABLE `Pedido` (
	`id_pedido` int(5) NOT NULL AUTO_INCREMENT,
	`pedido_data` TIMESTAMP,
	`preco_total` FLOAT,
	`id_pagamento` int(5),
	PRIMARY KEY (`id_pedido`)
);

CREATE TABLE `Produto` (
	`id_produto` int(5) NOT NULL AUTO_INCREMENT,
	`nome_produto` varchar(100),
	`valor_produto` FLOAT,
	PRIMARY KEY (`id_produto`)
);

CREATE TABLE `forma_de_pagamento` (
	`id_pagamento` int(5) NOT NULL AUTO_INCREMENT,
	`nome_pagamento` varchar(10),
	PRIMARY KEY (`id_pagamento`)
);

CREATE TABLE `Cliente` (
	`id_cliente` int(5) NOT NULL AUTO_INCREMENT,
	`nome_cliente` varchar(20),
	`endereco` varchar(100),
	`cidade` varchar(50),
	`estado` varchar(20),
	PRIMARY KEY (`id_cliente`)
);

CREATE TABLE `pedido_cliente` (
	`id_pedido` int(5) NOT NULL,
	`id_cliente` int(5) NOT NULL
);

CREATE TABLE `pedido_produto` (
	`id_pedido` int NOT NULL,
	`id_produto` int NOT NULL,
	`qtd_produto` int(100)
);

ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_fk0` FOREIGN KEY (`id_pagamento`) REFERENCES `forma_de_pagamento`(`id_pagamento`);

ALTER TABLE `pedido_cliente` ADD CONSTRAINT `pedido_cliente_fk0` FOREIGN KEY (`id_pedido`) REFERENCES `Pedido`(`id_pedido`);

ALTER TABLE `pedido_cliente` ADD CONSTRAINT `pedido_cliente_fk1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id_cliente`);

ALTER TABLE `pedido_produto` ADD CONSTRAINT `pedido_produto_fk0` FOREIGN KEY (`id_pedido`) REFERENCES `Pedido`(`id_pedido`);

ALTER TABLE `pedido_produto` ADD CONSTRAINT `pedido_produto_fk1` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id_produto`);

INSERT INTO forma_de_pagamento(nome_pagamento) VALUES
	('debito'),
    ('credito'),
    ('vr'),
    ('dinheiro');

INSERT INTO Pedido (pedido_data, preco_total, id_pagamento) VALUES
	('2021-07-25', 10, 1),
    ('2021-07-27', 8, 2),
    ('2021-07-28', 25, 1),
    ('2021-07-28', 24, 3),
    ('2021-07-29', 7, 4);

INSERT INTO Produto(nome_produto, valor_produto) VALUES
	('coxinha', 5),
    ('coca-lata', 5),
    ('empada', 5),
    ('suco 300ml', 3),
    ('doce de leite', 10),
    ('pao de queijo', 2.5),
    ('cafe', 2),
    ('cafe 300ml', 7);
    
INSERT INTO Cliente(nome_cliente, endereco, cidade, estado) VALUES
	('batman', 'rua 1', 'sao paulo', 'sp'),
    ('superman', 'rua 2', 'belo horizonte', 'bh'),
    ('mulher maravilha', 'rua 2', 'belo horizonte', 'bh'),
    ('flash', 'rua 3', 'teresina', 'pi');
    
INSERT INTO pedido_cliente(id_pedido, id_cliente) VALUES
	(1,1),
    (2,2),
    (3,3),
    (4,2),
    (5,4);
    
INSERT INTO pedido_produto(id_pedido, id_produto, qtd_produto) VALUES
    (1,1,1),
    (1,2,1),
    (2,3,1),
    (2,4,1),
    (3,3,1),
    (3,5,1),
    (4,6,4),
    (4,8,2),
    (5,1,1),
    (5,1,7);
    
    