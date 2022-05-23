use Scientists;

select * from Scientists
where Name like '%e%';

select name from Projects
where name like 'A%'
order by name;

select Code, Name from Projects
where code like '%3%'
order by Name;

select Scientists from AssignedTo
where Project in ('AeH3', 'Ast3', 'Che1');

select * from Projects
where Hours > 500;

select * from Projects
where Hours BETWEEN 250 and 800;

select name, code from Projects
where Name NOT LIKE 'A%';

select name from Projects
where code like '%h%';