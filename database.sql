CREATE DATABASE IF NOT EXISTS EcoIdentify;
USE EcoIdentify;

CREATE TABLE Dominio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_dominio VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255)
);

CREATE TABLE Reinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_reinos VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255),
    id_dominios INT,
    FOREIGN KEY (id_dominios) REFERENCES Dominio(id)
);

CREATE TABLE Phyla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_phyla VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255),
    id_reinos INT,
    id_dominios INT,
    FOREIGN KEY (id_reinos) REFERENCES Reinos(id),
    FOREIGN KEY (id_dominios) REFERENCES Dominio(id)
);

CREATE TABLE Clase (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_clase VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255),
    id_phyla INT,
    id_reinos INT,
    id_dominios INT,
    FOREIGN KEY (id_phyla) REFERENCES Phyla(id),
    FOREIGN KEY (id_reinos) REFERENCES Reinos(id),
    FOREIGN KEY (id_dominios) REFERENCES Dominio(id)
);

CREATE TABLE Orden (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_orden VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255),
    id_clase INT,
    id_phyla INT,
    id_reinos INT,
    id_dominios INT,
    FOREIGN KEY (id_clase) REFERENCES Clase(id),
    FOREIGN KEY (id_phyla) REFERENCES Phyla(id),
    FOREIGN KEY (id_reinos) REFERENCES Reinos(id),
    FOREIGN KEY (id_dominios) REFERENCES Dominio(id)
);

CREATE TABLE Familia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_familia VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255),
    id_orden INT,
    id_clase INT,
    id_phyla INT,
    id_reinos INT,
    id_dominios INT,
    FOREIGN KEY (id_orden) REFERENCES Orden(id),
    FOREIGN KEY (id_clase) REFERENCES Clase(id),
    FOREIGN KEY (id_phyla) REFERENCES Phyla(id),
    FOREIGN KEY (id_reinos) REFERENCES Reinos(id),
    FOREIGN KEY (id_dominios) REFERENCES Dominio(id)
);

CREATE TABLE Genero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_genero VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255),
    id_familia INT,
    id_orden INT,
    id_clase INT,
    id_phyla INT,
    id_reinos INT,
    id_dominios INT,
    FOREIGN KEY (id_familia) REFERENCES Familia(id),
    FOREIGN KEY (id_orden) REFERENCES Orden(id),
    FOREIGN KEY (id_clase) REFERENCES Clase(id),
    FOREIGN KEY (id_phyla) REFERENCES Phyla(id),
    FOREIGN KEY (id_reinos) REFERENCES Reinos(id),
    FOREIGN KEY (id_dominios) REFERENCES Dominio(id)
);

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL,
    contrasena TEXT NOT NULL,
    correo VARCHAR(255) NOT NULL
);

CREATE TABLE Fotos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(100) NULL
);


CREATE TABLE Publicaciones(
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    contenido VARCHAR(255) NOT NULL,
    id_usuario INT NOT NULL,
    nombre_imagen VARCHAR(25),
    FOREIGN KEY(id_usuario) REFERENCES Usuario(id),
); 

CREATE TABLE DetalleComentarioPublicacion(
    id INT AUTO_INCREMENT PRIMARY KEY,
    comentario VARCHAR(90) NOT NULL,
    id_publicacion INT NOT NULL,
    id_usuario INT NOT NULL,
   
    FOREIGN KEY(id_publicacion) REFERENCES Publicaciones(id) ,
    FOREIGN KEY(id_usuario) REFERENCES Usuario(id));
    
    
CREATE TABLE DetalleMe_gustaPublicacion ( 
    id INT AUTO_INCREMENT PRIMARY KEY, 
    id_publicacion INT NOT NULL, 
    id_usuario INT NOT NULL, 
    interaccion INT NOT NULL );



CREATE TABLE Especie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_especie VARCHAR(70) NOT NULL UNIQUE,
    descripción VARCHAR(255),
    id_genero INT,
    id_familia INT,
    id_orden INT,
    id_clase INT,
    id_phyla INT,
    id_reinos INT,
    id_dominios INT,
    FOREIGN KEY (id_genero) REFERENCES Genero(id),
    FOREIGN KEY (id_familia) REFERENCES Familia(id),
    FOREIGN KEY (id_orden) REFERENCES Orden(id),
    FOREIGN KEY (id_clase) REFERENCES Clase(id),
    FOREIGN KEY (id_phyla) REFERENCES Phyla(id),
    FOREIGN KEY (id_reinos) REFERENCES Reinos(id),
    FOREIGN KEY (id_dominios) REFERENCES Dominio(id)
);