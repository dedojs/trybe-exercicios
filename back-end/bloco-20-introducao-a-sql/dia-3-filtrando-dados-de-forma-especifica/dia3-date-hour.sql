USE sakila;

SELECT COUNT(*) AS 'Quantidade de Pagamentos' FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) AS 'Quantidade de Pagamentos' FROM payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-8-22';

SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minutos,
SECOND(rental_date) AS Segundos
FROM rental
WHERE rental_id = 10330;

SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22;

SELECT * from rental
where DATE(return_date) BETWEEN '2005-05-01' AND '2005-05-26';




