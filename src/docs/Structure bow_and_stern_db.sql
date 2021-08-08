-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bow_and_stern_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bow_and_stern_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bow_and_stern_db` DEFAULT CHARACTER SET utf8 ;
USE `bow_and_stern_db` ;

-- -----------------------------------------------------
-- Table `bow_and_stern_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bow_and_stern_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bow_and_stern_db`.`locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bow_and_stern_db`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bow_and_stern_db`.`boats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bow_and_stern_db`.`boats` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `short_description` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `year` INT NOT NULL,
  `measures` INT NOT NULL,
  `vessel_type` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `locations_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_boats_locations_idx` (`locations_id` ASC))
  -- CONSTRAINT `fk_boats_locations`
  --  FOREIGN KEY (`locations_id`)
  --  REFERENCES `bow_and_stern_db`.`locations` (`id`)
  --  ON DELETE NO ACTION
  --  ON UPDATE NO ACTION)
ENGINE = InnoDB;

ALTER TABLE `bow_and_stern_db`.`boats` 
CHANGE COLUMN `image` `image` VARCHAR(255) NOT NULL DEFAULT '1628448723543.jpg' ;

ALTER TABLE `bow_and_stern_db`.`boats` 
CHANGE COLUMN `locations_id` `locations_id` INT(11) NOT NULL DEFAULT 1 ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
