-- CREATE SCHEMA `ProyectoIntegrador`;
USE `proyectointegrador`;
CREATE TABLE `comentarios` (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
usuarios_id INT UNSIGNED NOT NULL,
productos_id INT UNSIGNED NOT NULL,
comentarios TEXT NOT NULL,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
deleted_at timestamp null,
CONSTRAINT `fk__users`FOREIGN KEY (`usuarios_id`) REFERENCES usuarios(id),
CONSTRAINT `fk_comentarios_producto`FOREIGN KEY (`productos_id`) REFERENCES productos(id)
);

/*USE `proyectointegrador`;
INSERT INTO `comentarios`(usuarios_id, productos_id, comentario)
values (1, 1, "Divino y muy buena calidad")*/

/*USE `proyectointegrador`;
INSERT INTO `comentarios`(usuarios_id, productos_id, comentario)
values (3, 4, "Este maquillaje me empodera")*/

/*USE `proyectointegrador`;
INSERT INTO `comentarios`(usuarios_id, productos_id, comentario)
values (5, 5, "El envio fue muy rapido")*/

/*USE `proyectointegrador`;
INSERT INTO `comentarios`(usuarios_id, productos_id, comentario)
values (6, 6, "Me encanto!!")*/

USE `proyectointegrador`;
INSERT INTO `comentarios`(usuarios_id, productos_id, comentario)
values (6, 7, "Increibles los colores")
