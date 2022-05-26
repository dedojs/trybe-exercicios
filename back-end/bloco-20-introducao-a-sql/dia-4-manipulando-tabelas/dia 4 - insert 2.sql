USE sakila;

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username) VALUES
('Lara', 'Sousa', 20, 'lalinha@yahoo', 2, 1, 'lala');

INSERT INTO address (address, address2, district, city_id, postal_code, phone, location) VALUES
('Rua g', 'bem querer', 'vitoria', 300, 45055020, 77988020059, POINT (88.4185932, 22.9321815));

INSERT INTO store (manager_staff_id, address_id) VALUES
(4, 606);

INSERT INTO store (manager_staff_id, address_id) VALUES
(6, 308);

