USE sakila;

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Andre', 'Sousa', 3, 'dedojs@yahoo.com', 2, 1, 'dedojs', '123456');

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Lara', 'Sousa', 4, 'lara@yahoo.com', 1, 1, 'lalajs', '123456'),
('Luisa', 'Sousa', 3, 'lulu@yahoo.com', 2, 1, 'lulujs', '123456');

SELECT * FROM staff;

INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

SELECT * FROM actor;

INSERT INTO category (name) VALUES
('Adult'),
('GamesRPG'),
('Anime');

SELECT * FROM category
ORDER BY last_update DESC;

# erro
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

SELECT * FROM store;

DELETE FROM staff
WHERE staff_id IN (5, 8, 9, 10, 11, 12, 13);


