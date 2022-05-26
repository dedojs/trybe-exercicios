SET SQL_SAFE_UPDATES = 0;

USE sakila;

DELETE from film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

SELECT * FROM actor
where first_name = 'Matthew';

DELETE from film_actor
WHERE actor_id in (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;



