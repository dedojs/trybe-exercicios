USE hr;

-- self join
-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS Employee, CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS Manager
FROM employees as E
INNER JOIN employees as M
ON E.EMPLOYEE_ID = M.MANAGER_ID
WHERE E.DEPARTMENT_ID <> M.DEPARTMENT_ID;

-- 2 Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT e.first_name AS Manager, COUNT(m.employee_id) AS Employees
FROM employees AS e
INNER JOIN employees AS m
ON e.employee_id = m.MANAGER_ID
GROUP BY Manager;
