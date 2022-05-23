USE sakila;
SELECT * FROM film;
SELECT title, release_year, rating FROM film;
SELECT COUNT(*) FROM film;

SELECT distinct last_name FROM actor;
SELECT COUNT(distinct last_name) FROM actor;
SELECT * FROM actor order by last_name, first_name DESC;

SELECT * FROM language LIMIT 5 offset 1;

SELECT title, release_year, length, rating, replacement_cost From film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;


