CREATE DATABASE aicoon;

USE aicoon;

CREATE TABLE comunidades(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  assuntos VARCHAR(255),
  descricao TEXT,
  privacidade CHAR(10),
  perfilimg VARCHAR(255) NOT NULL,
  bannerimg VARCHAR(255) NOT NULL,
  totalmembros INT(255) NOT NULL,
  totalcanais INT(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
