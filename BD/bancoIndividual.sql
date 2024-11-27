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
delete from resultado where fkUsuario = 1;

INSERT INTO resultado (fkUsuario, certas, erradas, tentativa)
VALUES (
    1,
    1,
    1,
    1 + COALESCE(
        (SELECT max(r.tentativa) 
         FROM resultado r 
         WHERE fkUsuario = 1), 
        0
    )
);

select fkUsuario, certas from resultado join usuario on idUsuario = fkUsuario;
SELECT max(resultado.certas) as maior FROM resultado JOIN usuario ON usuario.idUsuario= resultado.fkUsuario 
GROUP BY resultado.fkUsuario ORDER BY certa DESC LIMIT 1;
     

select fkUsuario, certas, erradas from resultado;

SELECT fkUsuario,  certas, erradas, tentativa FROM resultado join usuario on idUsuario = fkUsuario where 
fkUsuario = 1; 

SELECT fkUsuario,  certas, erradas, tentativa FROM usuario join resultado on idUsuario = fKUsuario
 where fkUsuario = 2;