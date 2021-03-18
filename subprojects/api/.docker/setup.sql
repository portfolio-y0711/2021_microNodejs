-- create the databases
CREATE DATABASE IF NOT EXISTS pathdb;

-- create the users for each database
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `pathdb`.* TO 'big4'@'%';

FLUSH PRIVILEGES;
