CREATE SCHEMA `ProyectoIntegrador`;
USE `ProyectoIntegrador`;
create table usuarios (
id int unsigned primary key not null auto_increment,
nombre varchar (30) not null,
email varchar (30) not null,
password varchar (100) not null,
foto_de_perfil varchar (250),
dni int not null unique,  
fecha_de_nacimiento date not null,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
deleted_at timestamp null
);
/*use `ProyectoIntegrador`;
insert into `usuarios` (nombre, email, dni, fecha_de_nacimiento, password)
VALUES ("Sofia", "sofiarroyo@gmail.com", 45786956, "2004-06-17", "Sofiacapa")*/

/*use `ProyectoIntegrador`;
insert into `usuarios` (nombre, email, dni, fecha_de_nacimiento, password)
VALUES ("Francesca", "franguadngni@gmail.com", 45712355, "2003-12-17", "Franhola")*/

/*use `ProyectoIntegrador`;
insert into `usuarios` (nombre, email, dni, fecha_de_nacimiento, password)
VALUES ("Lara", "laragrazzini@gmail.com", 44712355, "2003-11-17", "Laaranhola")*/

/*use `ProyectoIntegrador`;
insert into `usuarios` (nombre, email, dni, fecha_de_nacimiento, password)
VALUES ("Clara", "clarapellet@gmail.com", 45819529, "2004-05-24", "Clarita")*/

/*use `ProyectoIntegrador`;
insert into `usuarios` (nombre, email, dni, fecha_de_nacimiento, password)
VALUES ("Mariana", "marianagonzalez@gmail.com", 20456234, "2001-12-17", "Mariana")*/






