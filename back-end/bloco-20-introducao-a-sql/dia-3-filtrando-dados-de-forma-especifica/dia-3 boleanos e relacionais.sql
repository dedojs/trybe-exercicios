USE sakila;
SELECT * FROM customer
WHERE email LIKE 'LEONARD.SCHOFIELD%';

SELECT concat(first_name, ' ', last_name) FROM customer
WHERE store_id = 2 AND active is FALSE AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

SELECT count(active) AS quantidade_de_clientes_ativos FROM customer
WHERE active is TRUE and store_id = 1;

SELECT * FROM customer
WHERE active is FALSE AND store_id = 1;

SELECT title FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate , title
LIMIT 50; 

