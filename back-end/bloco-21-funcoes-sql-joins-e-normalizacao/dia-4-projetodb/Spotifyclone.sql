DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;

CREATE TABLE SpotifyClone.Subscription (
	subscription_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    subscription_name VARCHAR(20) NOT NULL,
    subscription_value FLOAT
);

CREATE TABLE SpotifyClone.User(
	user_id INT AUTO_INCREMENT NOT NULL	PRIMARY KEY,
    user_name VARCHAR(20) NOT NULL,
    age INT,
    subscription_id INT NOT NULL,
    signup_date DATE,
    FOREIGN KEY (subscription_id) REFERENCES SpotifyClone.Subscription (subscription_id)
);

CREATE TABLE SpotifyClone.Artist (
	artist_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    artist_name VARCHAR(30)
);

CREATE TABLE SpotifyClone.User_artist (
	user_id INT,
    artist_id INT,
    FOREIGN KEY (user_id) REFERENCES SpotifyClone.User (user_id),
    FOREIGN KEY (artist_id) REFERENCES SpotifyClone.Artist (artist_id)
);

CREATE TABLE SpotifyClone.Album (
	album_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome_album VARCHAR(50) NOT NULL,
    artist_id INT,
    release_year VARCHAR(4),
    FOREIGN KEY (artist_id) REFERENCES SpotifyClone.Artist (artist_id)
);

CREATE TABLE SpotifyClone.Music (
	music_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    music_name VARCHAR(50) NOT NULL,
    music_length INT NOT NULL,
    artist_id INT,
    album_id INT,
    FOREIGN KEY (artist_id) REFERENCES SpotifyClone.Artist (artist_id),
    FOREIGN KEY (album_id) REFERENCES SpotifyClone.Album (album_id)
);

CREATE TABLE SpotifyClone.Playlist_history (
	user_id INT,
    music_id INT,
    history_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES SpotifyClone.User (user_id),
    FOREIGN KEY (music_id) REFERENCES SpotifyClone.Music (music_id)
);

INSERT INTO SpotifyClone.Subscription(subscription_name , subscription_value) VALUES
	('Gratuito', 0),
    ('Familiar', 7.99),
    ('Universitário', 5.99),
    ('Pessoal', 6.99);

INSERT INTO SpotifyClone.User(user_name, age, subscription_id, signup_date) VALUES
	('Thati',23,1, '2019-10-20'),
    ('Cintia',35,2, '2017-12-30'),
    ('Bill',20,3, '2019-06-05'),
    ('Roger',45,4, '2020-05-13'),
    ('Norman',58,4, '2017-02-17'),
    ('Patrick',33,2, '2017-01-06'),
    ('Vivian',26,3, '2018-01-05'),
    ('Carol',19,3, '2018-02-14'),
    ('Angelina',42,2, '2018-04-29'),
    ('Paul',46,2, '2017-01-17');
    
    INSERT INTO SpotifyClone.Artist(artist_name) VALUES
		('Walter Phoenix'),
        ('Freedie Shannon'),
        ('Lance Day'),
        ('Peter Strong'),
        ('Tyler Isle'),
        ('Fog');
        
	INSERT INTO SpotifyClone.User_artist(user_id, artist_id) VALUES
		(1,1),
        (1,2),
        (1,3),
        (2,1),
        (2,3),
        (3,3),
        (3,1),
        (4,2),
        (5,5),
        (5,6),
        (6,6),
        (6,3),
        (6,1),
        (7,4),
        (7,5),
        (8,1),
        (8,5),
        (9,6),
        (9,2),
        (9,3),
		(10,4),
        (10,6);
        
	INSERT INTO SpotifyClone.Album (nome_album, artist_id, release_year) VALUES
		('Envious',1,'1990'),
        ('Exuberant',1,'1993'),
        ('Hallowed Steam',4,'1995'),
        ('Incandescent',3,'1998'),
        ('Temporary Culture',2,'2001'),
        ('Library of liberty',2,'2003'),
        ('Chained Down',5,'2007'),
        ('Cabinet of fools',5,'2012'),
        ('No guarantees',5,'2015'),
        ('Apparatus',6,'2015');
        
	INSERT INTO SpotifyClone.Music (music_name, music_length, artist_id, album_id) VALUES
        ('Baby',136,6,10),
        ('Celebration Of More',146,3,4),
        ('Dance With Her Own',116,1,1),
		('Diamond Power',241,3,4),
        ('Fantasy For Me',100,3,4),
        ('Finding My Traditions',179,5,7),
        ('Hard And Time',135,5,7),
        ('He Heard Youre Bad For Me',154,5,8),
        ('He Hopes We Cant Stay',210,5,8),
        ('Hes Trouble',138,5,9),
        ('Hes Walking Away',159,5,9),
        ('History Of My Roses',222,2,6),
        ('Home Forever',231,3,4),
		('Honey, Im A Lone Wolf',150,5,7),
        ('Honey, So Do I',207,4,3),
        ('Honey',79,6,10),
        ('I Heard I Want To Bo Alone',120,5,9),
        ('I Know I Know',117,5,8),
        ('I Ride Alone',151,5,9),
        ('Lets Be Silly',132,3,4),
        ('Magic Circus',105,4,3),
        ('Need Of The Evening',190,2,6),
        ('Reflections Of Magic',163,1,1),
		('Rock His Everything',223,3,4),
        ('She Knows',244,4,3),
        ('She Thinks I Wont Stay Tonight',166,5,8),
        ('Soul For Us',200,1,1),
        ('Sweetie, Lets Go Wild',139,4,3),
        ('Thang Of Thunder',240,2,5),
        ('Time Fireworks',152,1,1),
        ('Troubles Of My Inner Fire',203,1,1),
        ('Walking And Game',123,2,6),
        ('Walking And Man',229,5,7),
		('Without My Love',111,2,6),
        ('Without My Streets',176,2,5),
        ('Words Of Her Life',185,2,5),
        ('Wouldnt It Be Nice',213,6,10),
        ('You Cheated On Me',95,6,10),
        ('You Make Me Feel So',83,6,10),
        ('Young And Father',197,2,6);
        
	INSERT INTO SpotifyClone.Playlist_history(user_id, music_id, history_date) VALUES
		(1,16,'2020-02-28 10:45:55'),
        (1,33,'2020-05-02 05:30:35'),
        (1,40,'2020-03-06 11:22:33'),
        (1,4,'2020-08-05 08:05:17'),
        (1,20,'2020-09-14 16:32:22'),
        (2,17,'2020-01-02 07:40:33'),
        (2,34,'2020-10-09 12:27:48'),
        (2,1,'2020-09-21 13:14:46'),
        (3,21,'2020-11-13 16:55:13'),
        (3,3,'2020-12-05 18:38:30'),
        (3,7,'2020-07-30 10:00:00'),
        (4,23,'2021-08-15 17:10:10'),
        (4,19,'2021-07-10 15:20:30'),
        (4,14,'2021-01-09 01:44:33'),
        (5,15,'2020-07-03 19:33:28'),
        (5,24,'2017-02-24 21:14:22'),
        (5,4,'2020-08-06 15:23:43'),
        (5,27,'2020-11-10 13:52:27'),
        (6,37,'2019-02-07 20:33:48'),
        (6,8,'2017-01-24 00:31:17'),
        (6,9,'2017-10-12 12:35:20'),
        (6,32,'2018-05-29 14:56:41'),
        (7,7,'2018-05-09 22:30:49'),
        (7,31,'2020-07-27 12:52:58'),
        (7,2,'2018-01-16 18:40:43'),
        (8,1,'2018-03-21 16:56:40'),
        (8,39,'2020-10-18 13:38:05'),
        (8,11,'2019-05-25 08:14:03'),
        (8,10,'2021-08-15 21:37:09'),
        (9,29,'2021-05-24 17:23:45'),
        (9,36,'2018-12-07 22:48:52'),
        (9,28,'2021-03-14 06:14:26'),
        (9,25,'2020-04-01 03:36:00'),
        (10,12,'2017-02-06 08:21:34'),
        (10,34,'2017-12-04 05:33:43'),
        (10,24,'2017-07-27 05:24:49'),
        (10,13,'2017-12-25 01:03:57');
        	