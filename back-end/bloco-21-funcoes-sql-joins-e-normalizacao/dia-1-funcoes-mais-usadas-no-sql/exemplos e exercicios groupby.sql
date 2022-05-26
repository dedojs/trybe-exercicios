-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- exercicio 

SELECT active, COUNT(*) AS 'Clientes Cadastrados' FROM sakila.customer
GROUP BY active;

SELECT store_id, active AS 'Status', COUNT(*) AS 'Quantidade'
FROM sakila.customer
GROUP BY store_id, active;

SELECT rating, AVG(rental_duration) AS 'Média de duração' FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;

SELECT district, COUNT(district) AS Quantidade FROM sakila.address
GROUP BY district
ORDER BY Quantidade DESC;

