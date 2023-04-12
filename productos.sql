-- CREATE SCHEMA `ProyectoIntegrador`;
USE `proyectointegrador`;
CREATE TABLE `productos` (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
usuarios_id INT UNSIGNED NOT NULL,
nombre VARCHAR(50) NOT NULL,
descripcion TEXT NOT NULL,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
deleted_at timestamp null,
CONSTRAINT fk_productos_users FOREIGN KEY(usuarios_id) REFERENCES usuarios(id)
);

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (1, "FENTY STIX SHIMMER SKINSTICK", "Longwear, blendable, shimmering stick with a cream-to-powder texture to highlight, blush, and enhance.")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (3, "GLOSS BOMB UNIVERSAL LIP LUMINIZER", "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (5, "EAZE DROP BLURRING SKIN TINT", "Delivers smooth, instantly blurred skin in just a few easy drops.")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (6, "CHEEKS OUT FREESTYLE CREAM BLUSH", "Light-as-air cream blush that easily melts into the skin for a kiss of color for every skin tone.")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (6, "FULL FRONTAL VOLUME, LIFT & CURL MASCARA", "Do-it-all mascara with an exclusive flat-to-fat brush that instantly volumizes, lifts, lengthens, and curls.")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (7, "SUN STALK'R FACE + EYE BRONZER & HIGHLIGHTER PALETTE", "Limited-edition bronzer & highlighter palette for face and eyes. Includes two new, never-before-seen highlighter shades")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (8, "SLIP SHINE SHEER SHINY LIPSTICK", "Ultra comfortable, sheer lipstick infused with pomegranate for the perfect amount of nourishing color and shine.")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (8, "PRO FILT'R INSTANT RETOUCH SETTING POWDER", "Superfine, weightless, loose setting powder extends makeup wear for that filtered, photo-ready finish.")*/

/*USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (5, "FLYPENCIL LONGWEAR PENCIL EYELINER", "Creamy longwear, water-resistant pencil eyeliner with a convenient twist-up tip that effortlessly glides for lightweight, smudge-resistant lines.")*/

USE `proyectointegrador`;
INSERT INTO `productos`(usuarios_id, nombre, descripcion)
values (1, "KILLAWATT FREESTYLE HIGHLIGHTER", "Weightless, show-stopping, creamy powder highlighter for a buildable glow that lasts all day and night")










