CREATE DATABASE HandLawyer;

create table persona(

id integer primary key,
nombre varchar(20),
apellido varchar(20),
telefono varchar(20),
direccion varchar(50),
cargo varchar(20),
usuario varchar(20),
contraseña varchar(20)
);

create table indemnizacion(
id integer not null IDENTITY( 1 , 1 ),
id_cliente int,
nombres_cliente varchar(50),
telefono_cliente varchar(20),
direccion_cliente varchar(20),
tipo varchar(20),
valor_renta integer,
meses int,
interes decimal,
valorTotal integer
);