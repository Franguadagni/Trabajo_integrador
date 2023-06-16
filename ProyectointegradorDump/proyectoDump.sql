CREATE DATABASE  IF NOT EXISTS `proyectointegrador` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `proyectointegrador`;
-- MySQL dump 10.13  Distrib 5.7.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectointegrador
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuarios_id` int(10) unsigned NOT NULL,
  `productos_id` int(10) unsigned NOT NULL,
  `comentarios` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_kiosko_users` (`usuarios_id`),
  KEY `fk_kiosko_producto` (`productos_id`),
  CONSTRAINT `fk_kiosko_producto` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `fk_kiosko_users` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'Divino y muy buena calidad','2023-04-11 21:58:30','2023-04-11 21:58:30',NULL),(3,3,4,'Este maquillaje me empodera','2023-04-11 21:59:48','2023-04-11 21:59:48',NULL),(4,5,5,'El envio fue muy rapido','2023-04-11 22:00:21','2023-04-11 22:00:21',NULL),(5,6,6,'Me encanto!!','2023-04-11 22:00:49','2023-04-11 22:00:49',NULL),(6,6,7,'Increibles los colores','2023-04-11 22:01:18','2023-04-11 22:01:18',NULL),(7,6,7,'me gustaron','2023-05-31 20:46:43','2023-05-31 20:46:43',NULL),(10,10,12,'me encanto!','2023-06-14 12:41:06','2023-06-14 12:41:06',NULL),(11,1,14,'muy recomendado!!!','2023-06-14 17:49:39','2023-06-14 17:49:39',NULL),(12,18,13,'muy bueno!','2023-06-14 18:28:23','2023-06-14 18:28:23',NULL),(13,1,13,'me funciono perfecto!','2023-06-14 20:28:27','2023-06-14 20:28:27',NULL),(14,19,13,'colores buensimos!!','2023-06-14 22:02:35','2023-06-14 22:02:35',NULL),(15,18,18,'Me resulto increible!!','2023-06-16 14:43:57','2023-06-16 14:43:57',NULL),(16,18,9,'los colores son espectaculares. recomiendo muchisimo.','2023-06-16 15:53:08','2023-06-16 15:53:08',NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuarios_id` int(10) unsigned NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_users` (`usuarios_id`),
  CONSTRAINT `fk_productos_users` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'FENTY STIX SHIMMER SKINSTICK','Longwear, blendable, shimmering stick with a cream-to-powder texture to highlight, blush, and enhance.','2023-04-11 21:11:01','2023-06-11 18:11:47',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30004_FB3036_e6335713-8c10-4c69-ac6e-1f771a5b618d_600x.jpg?v=1671056634'),(4,3,'GLOSS BOMB UNIVERSAL LIP LUMINIZER','The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks','2023-04-11 21:17:16','2023-06-11 18:11:47',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_HOLII18_PRODUCT_GLOSS_BOMB_FU--Y_CLOSED_FULLRES_1200X1500_72DPI_600x.jpg?v=1637091580'),(5,5,'EAZE DROP BLURRING SKIN TINT','Delivers smooth, instantly blurred skin in just a few easy drops.','2023-04-11 21:18:36','2023-06-11 18:14:41',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30031_FB020_600x.jpg?v=1623427028 '),(6,6,'CHEEKS OUT FREESTYLE CREAM BLUSH','Light-as-air cream blush that easily melts into the skin for a kiss of color for every skin tone.','2023-04-11 21:19:43','2023-06-11 18:11:47',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30022_FB9048_600x.jpg?v=1614391180'),(7,6,'FULL FRONTAL VOLUME, LIFT & CURL MASCARA','Do-it-all mascara with an exclusive flat-to-fat brush that instantly volumizes, lifts, lengthens, and curls.','2023-04-11 21:24:56','2023-06-11 18:09:56',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB70025_FB4081_600x.jpg?v=1630600341 '),(8,7,'SUN STALK\'R FACE + EYE BRONZER & HIGHLIGHTER PALET','Limited-edition bronzer & highlighter palette for face and eyes. Includes two new, never-before-seen highlighter shades','2023-04-11 21:26:39','2023-06-11 18:14:41',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_SPR_SUM22_T2PRODUCT_CONCRETE_SUN_STALK_R_PALETTE_OPEN_1200x1500_1_600x.jpg?v=1648163718'),(9,8,'SLIP SHINE SHEER SHINY LIPSTICK','Ultra comfortable, sheer lipstick infused with pomegranate for the perfect amount of nourishing color and shine.','2023-04-11 21:29:56','2023-06-11 18:13:28',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB40026_FB4090_600x.jpg?v=1614391054'),(11,8,'PRO FILT\'R INSTANT RETOUCH SETTING POWDER','Superfine, weightless, loose setting powder extends makeup wear for that filtered, photo-ready finish.','2023-04-11 21:31:45','2023-06-11 18:13:28',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/44764_SettingPowder_Concrete_CLOSED_1200x1500_RGB_LAVENDER_600x.jpg?v=1623342556 '),(12,5,'FLYPENCIL LONGWEAR PENCIL EYELINER','Creamy longwear, water-resistant pencil eyeliner with a convenient twist-up tip that effortlessly glides for lightweight, smudge-resistant lines.','2023-04-11 21:32:53','2023-06-11 18:11:47',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB70024_FB4081_600x.jpg?v=1614391490 '),(13,1,'INVISIMATTE INSTANT SETTING + BLOTTING POWDER','VERSATILE FINISHING POWDER FOR ALL.\r\nBLURS, CONTROLS SHINE, EXTENDS MAKEUP WEAR.','2023-04-11 21:33:35','2023-06-14 18:12:05',NULL,'	https://cdn.shopify.com/s/files/1/0341/3458/9485/products/58638_600x.jpg?v=1657908363'),(14,1,'SNAP SHADOWS MIX & MATCH EYESHADOW PALETTE','SUPER RICH COLOR. EASY TO BLEND.\r\nPALETTES SNAP TOGETHER: PAIR YOUR FAVES.','2023-06-14 17:49:23','2023-06-14 17:49:23',NULL,'	https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB70023_FB9034_600x.jpg?v=1614391721'),(18,18,'FULL-BODIED FOUNDATION BRUSH 110','A medium-density liquid foundation brush designed to give any Fenty Beauty liquid foundation seamless, air-touched full coverage.','2023-06-16 14:39:15','2023-06-16 14:43:40',NULL,'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/22551_600x.jpg?v=1614393887');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `foto_de_perfil` varchar(250) DEFAULT NULL,
  `dni` int(11) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sofia','sofiarroyo@gmail.com','Sofiacapa','https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',45786956,'2004-06-17','2023-04-11 20:03:59','2023-06-12 18:39:57',NULL),(3,'Francesca','franguadngni@gmail.com','Franhola','https://img2.gratispng.com/20180509/jrq/kisspng-suit-2-fictional-universe-of-avatar-male-5af36dca7cb183.8796134015259027945108.jpg',45712345,'2003-12-17','2023-04-11 20:08:12','2023-06-12 18:45:31',NULL),(5,'Francesca','franguadngni@gmail.com','Franhola','https://img2.gratispng.com/20180509/jrq/kisspng-suit-2-fictional-universe-of-avatar-male-5af36dca7cb183.8796134015259027945108.jpg',45712355,'2003-12-17','2023-04-11 20:09:13','2023-06-12 18:45:31',NULL),(6,'Lara','laragrazzini@gmail.com','Laaranhola','https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg',44712355,'2003-11-17','2023-04-11 20:11:15','2023-06-12 18:47:44',NULL),(7,'Clara','clarapellet@gmail.com','Clarita','https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation.png',45819529,'2004-05-24','2023-04-11 20:13:10','2023-06-12 18:42:34',NULL),(8,'Mariana','marianagonzalez@gmail.com','Mariana','https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg',20456234,'2001-12-17','2023-04-11 20:14:50','2023-06-12 18:47:44',NULL),(9,'sofia','sofiarroyo100@gmail.com','$2a$12$7TexEZr3sUoXMUK4g.Dk0eckVbXzcQvwGdbhOgdImC.0y.dsndK7a',NULL,45419781,'0000-00-00','2023-06-07 19:33:50','2023-06-07 19:33:50',NULL),(10,'franchu','fran@gmail.com','$2a$12$k2w.5tSlQ.YEzA9kwzReGegh/BduF6AWsgjgaaYHIDwUSGUS9ecse',NULL,56787654,'2023-06-23','2023-06-11 17:52:03','2023-06-14 17:44:13',NULL),(12,'sofia','sofi123@gmail.com','$2a$12$96gS0TNmgaYHr8IVFdHJm.4qZJCRoygq8vIRceNP2Npf/yul5yvLi',NULL,45786666,'2023-06-09','2023-06-12 17:34:13','2023-06-12 17:34:13',NULL),(13,'prueba','sofiarroyo100@gmail.com','$2a$12$m79ictfUZzrRLy19Mo1X4OzFhbQxVpa0.O5qFyH.VNEk3EHozPpMa',NULL,654321,'2023-06-08','2023-06-12 18:14:00','2023-06-12 18:14:00',NULL),(14,'sofia','sofiarroyo100@gmail.com','$2a$12$PyEO82vfRkzC9a.VjpVwm.Grdx/1UoxCpWQic5BacV/xn.F6Ko0l6','',53462462,'2023-06-01','2023-06-14 13:05:03','2023-06-14 13:05:03',NULL),(15,'franchu','fran@gmail.com','$2a$12$b2lgoSZrpOsWamxO8eXoxuO/RZHIfxyMcE7G5mG4pdYmDtfkFDzo6','',87645632,'0000-00-00','2023-06-14 14:47:15','2023-06-14 14:47:15',NULL),(16,'fran','fran@gmail.com','$2a$12$PuY28tXl6kVFwbcTXTNwVeUqkvk3Tyw68iA8B9LkrY9eFsssps7Fq','',457996349,'2023-06-08','2023-06-14 17:40:53','2023-06-14 17:40:53',NULL),(18,'Flor','flor@gmail.com','$2a$12$0BL9SQ0gd8p/XDII9RKfJe.7zEkFVTeXnbO9AH/1O8Ny9yrH8AylK','https://cdn.pixabay.com/photo/2017/08/18/20/51/flower-2656509_1280.jpg',34987123,'2023-06-13','2023-06-14 17:56:14','2023-06-16 15:53:35',NULL),(19,'ines','ines@gmail.com','$2a$12$mZutZHDevprjie4qBArLKOunu1Mobj58nxJ333xDyBcJbPlYMOjnK','',5678543,'2023-06-08','2023-06-14 22:02:03','2023-06-14 22:02:03',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-16 17:38:56
