USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name like 'GR%';

SELECT * FROM Fornecimentos
WHERE peca = 2
order by fornecedor;

SELECT peca, preco, fornecedor from Fornecimentos
where fornecedor like '%n%';

SELECT * from Fornecedores
where name like '%ltda%'
order by name desc;

select count(name) from Fornecedores
where code like '%F%';

select * from Fornecimentos
where preco between 15 and 40
order by preco;

select count(fornecimento) as 'numero de vendas' from Vendas
where DATE(order_date) between '2018-04-15' and '2019-7-30'; 


