USE sakila;

-- 1 Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name), f.film_id
FROM actor AS a
INNER JOIN film_actor as f
ON a.actor_id = f.actor_id;

-- 2 Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT CONCAT(S.first_name, ' ', S.last_name) AS Name, A.address AS Address
FROM staff AS S
INNER JOIN address as A
ON S.address_id = A.address_id;

-- 3 Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente,
-- juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT C.customer_id, C.first_name, C.email, A.address_id, A.address
FROM customer AS C
INNER JOIN address AS A
ON C.address_id = A.address_id
ORDER BY first_name DESC
LIMIT 100;

-- 4 Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes.
-- As informações podem ser encontradas nas tabelas address e customer.
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%'
ORDER BY c.first_name;

-- 5 Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente.
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT c.first_name, a.address, count(a.address)
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;

-- 6  Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006.
-- Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.staff_id;

-- 7 Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor,
-- film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name), f.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN film AS f ON f.film_id = fa.film_id;

-- Vincular nome da cidade ao nome do país ligando pelo country id
SELECT ci.city, co.country
FROM city as ci
INNER JOIN  country as co
ON ci.country_id = co.country_id
ORDER BY ci.city;

-- Selecionar nome e categoria
SELECT fi.title, categ.name, fc.category_id, fi.film_id
FROM film_category as fc
INNER JOIN category as categ ON fc.category_id = categ.category_id
INNER JOIN film as fi ON fi.film_id = fc.film_id;


 

