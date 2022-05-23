USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT * FROM film;
SELECT title, description,  release_year FROM film;
SELECT * FROM category;
SELECT CONCAT(first_name, ' ',last_name) AS 'Nome Completo' FROM actor;
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM film;
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM film;
SELECT CONCAT(address, ', ', district) AS 'Endereço' FROM address;
SELECT COUNT(DISTINCT first_name) FROM actor;
SELECT COUNT(address2) FROM address
WHERE address2 = '';
SELECT COUNT(password) FROM staff;
SELECT COUNT(*) FROM staff;
SELECT COUNT(email) FROM staff;
SELECT * FROM actor LIMIT 10 OFFSET 4;
SELECT * FROM actor ORDER BY first_name DESC;
SELECT * FROM actor ORDER BY first_name, last_name ASC;
