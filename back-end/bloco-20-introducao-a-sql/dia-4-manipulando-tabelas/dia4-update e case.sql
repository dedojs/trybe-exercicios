SET SQL_SAFE_UPDATES = 0;

USE sakila;

UPDATE actor
SET first_name = 'Jules'
WHERE first_name = 'Julia';

SELECT * FROM actor
ORDER BY last_update DESC;

UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

UPDATE film
SET rental_rate = 25.00
WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
CASE 
	WHEN length BETWEEN 0 AND 100 THEN 10.00
    WHEN length > 100 THEN 20.00
    ELSE length
    END);
			



