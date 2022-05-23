SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1,2,3;
SELECT 10+15;
SELECT 10+5+3*7*8/5*12;
USE Scientists;
SELECT * from Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
SELECT Name FROM Scientists order by Name ASC;
SELECT Name FROM Projects order by Name Desc;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído') FROM Projects;
SELECT Name, Hours From Projects ORDER BY Hours ASC Desc LIMIT 3;
SELECT DISTINCT(Project) FROM AssignedTo;
SELECT Name From Projects order by Hours Desc limit 1;
SELECT Name From Projects order by Hours ASC limit 1 offset 1;
SELECT * FROM Projects order by Hours limit 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') FROM Scientists;

