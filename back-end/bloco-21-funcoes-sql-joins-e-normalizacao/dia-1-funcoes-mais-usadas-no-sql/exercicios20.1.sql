USE hr;
SELECT MAX(SALARY) FROM employees;

SELECT MAX(SALARY) - MIN(SALARY) FROM employees;

SELECT JOB_ID, AVG(SALARY) FROM employees
GROUP BY JOB_ID
ORDER BY SALARY DESC;

SELECT SUM(SALARY) FROM employees;

SELECT ROUND(MAX(SALARY),2), ROUND(MIN(SALARY),2), ROUND(SUM(SALARY),2), ROUND(AVG(SALARY),2) FROM employees;

SELECT JOB_ID, COUNT(*) AS TOTAL FROM employees
WHERE JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT JOB_ID, AVG(SALARY) AS MEDIA_SALARIO FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY MEDIA_SALARIO DESC;

SELECT DEPARTMENT_ID, AVG(SALARY), COUNT(*) FROM employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(DEPARTMENT_ID) > 10;

SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET PHONE_NUMBER = REPLACE(phone_number, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

SELECT * FROM employees
WHERE char_length(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

SELECT employee_id, first_name, DAY(hire_date) FROM employees;

SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

SELECT ucase(CONCAT(first_name, ' ', last_name)) from employees;

SELECT last_name, hire_date FROM employees
WHERE year(HIRE_DATE) = 1987 AND month(HIRE_DATE) = 07;

SELECT first_name, last_name, datediff(current_date, hire_date) AS Tempo_contratado FROM employees;


