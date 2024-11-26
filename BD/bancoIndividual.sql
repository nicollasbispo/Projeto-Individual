create database gymtech;
use gymtech;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);
select * from usuario;

create table resultado(
idResultado int auto_increment,
fkUsuario int, constraint fkResultadoUsuario foreign key(fkUsuario)
					references usuario(idUsuario),
certas int,
erradas int,
tentativa int,
primary key(idResultado, fkUsuario)
);

INSERT INTO resultado (fkUsuario, certas, erradas) VALUES 
(1, 10, 0),
(2, 5, 5);

select * from usuario;
select * from resultado;

select fkUsuario, certas, erradas from resultado;
