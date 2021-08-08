-- DATA SCRIPT --

-- ----------------------------------------------------
-- Insert users --
-- ----------------------------------------------------        
INSERT INTO bow_and_stern_db.users (id, first_name, last_name, email, password) VALUES (NULL, 'Silvina', 'Donvito', 'silvina@gmail.com', 'A123');
INSERT INTO bow_and_stern_db.users (id, first_name, last_name, email, password) VALUES (NULL, 'Francisco', 'Messina', 'francisco@gmail.com', 'B456');
INSERT INTO bow_and_stern_db.users (id, first_name, last_name, email, password) VALUES (NULL, 'Matias', 'Giles', 'matias@gmail.com', 'C789');
INSERT INTO bow_and_stern_db.users (id, first_name, last_name, email, password) VALUES (NULL, 'Nelo', 'Sanchez', 'nelo@gmail.com', 'D101');

-- -----------------------------------------------------
-- Insert boats --
-- -----------------------------------------------------
INSERT INTO bow_and_stern_db.boats (id, name, short_description, year, measures, vessel_type, description, locations_id) VALUES (NULL, 'Sedna', 'Hello and welcome on board of this amazing Sedna', '2017', '21', 'Monohull', 'Our Sedna is perfect for a day out on the water with your family or friends', '1');
INSERT INTO bow_and_stern_db.boats (id, name, short_description, year, measures, vessel_type, description, locations_id) VALUES (NULL, 'Xenoa', 'San Diego is a very beautiful city and exploring it by the sea if the most way to do it!', '2011', '29', 'Catamaran', 'You have an excellent opportunity to get away from the routine of everyday life, have a new experience, and see new places! So book your Boat trip today!', '2');
INSERT INTO bow_and_stern_db.boats (id, name, short_description, year, measures, vessel_type, description, locations_id) VALUES (NULL, 'Agua Marina', 'Explore the Riviera Maya in style aboard our Agua Marina private yacht charter', '2001', '38','Yacht', 'Enjoy a short coastal cruise up to the stunning and largely untouched shores of Xpu-Ha.', '4'); 
INSERT INTO bow_and_stern_db.boats (id, name, short_description, year, measures, vessel_type, description, locations_id) VALUES (NULL, 'Alea', 'Welcome on this beautiful Alea available in Quintana Roo for charter!', '2007', '28', 'Catamaran', 'This beautiful Sea Ray Yacht provides all of the luxuries you’d want to enjoy a memory filled day in the breathtaking waters of Miami.', '4');
INSERT INTO bow_and_stern_db.boats (id, name, short_description, year, measures, vessel_type, description, locations_id) VALUES (NULL, 'Adventurer', 'Come Explore Miami by boat!', '2009', '28', 'Monohull', 'Boat through Biscayne Bay, Key Biscayne , or through Downtown Miami and Brickell area, or just hang out on the local sandbars for a day in the water and sun.', '1 ');
INSERT INTO bow_and_stern_db.boats (id, name, short_description, year, measures, vessel_type, description, locations_id) VALUES (NULL, 'Wave', 'Have Fun in San Diego on our Party Boat.', '2003', '42', 'Catamaran', 'This is the Best catamaran in town for large groups,  birthdays, corporate and team building.', '2');
INSERT INTO bow_and_stern_db.boats (id, name, short_description, year, measures, vessel_type, description, locations_id) VALUES (NULL, 'Hokulani', 'Join us for a fabulous adventure aboard Hokulani', '2005', '40', 'Yacht', 'Excellent for group travel between the islands as well as being easy to snorkel and dive from.', '3');

-- ----------------------------------------------------
-- Insert locations --
-- ----------------------------------------------------        
INSERT INTO bow_and_stern_db.locations (id, location) VALUES (NULL, 'Florida, MIAMI');
INSERT INTO bow_and_stern_db.locations (id, location) VALUES (NULL, 'California, SAN DIEGO');
INSERT INTO bow_and_stern_db.locations (id, location) VALUES (NULL, 'Marsh Harbour, BAHAMAS'); 
INSERT INTO bow_and_stern_db.locations (id, location) VALUES (NULL, 'Quintana Roo, RIVIERA MAYA');

-- -----------------------------------------------------
-- Testing --
-- -----------------------------------------------------

SELECT boats.name AS 'Boat name', boats.short_description AS 'Description', locations.location AS 'Location' AS 'Location'
FROM boats
INNER JOIN locations
ON locations_id = locations.id
ORDER BY location;

SELECT * FROM users;
SELECT * FROM boats;
SELECT * FROM locations;

