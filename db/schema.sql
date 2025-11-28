CREATE DATABASE gestao_testes;
USE gestao_testes;

CREATE TABLE utilizadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cargo ENUM("Estudante","Professor") NOT NULL,
	criado_em TIMESTAMP DEFAULT NOW()
   
);



CREATE TABLE disciplinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    numero_horas INT NOT NULL,
    criado_em TIMESTAMP DEFAULT NOW(),
    id_professor INT NOT NULL,
    FOREIGN KEY (id_professor) REFERENCES utilizadores(id)
);



CREATE TABLE testes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tema VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    criado_em TIMESTAMP DEFAULT NOW(),
    id_disciplina INT NOT NULL,
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id)
);



CREATE TABLE resultados (
    id INT AUTO_INCREMENT PRIMARY KEY,
	nota DECIMAL(5,2) NOT NULL CHECK (nota >= 0 AND nota <= 20),
    id_teste INT NOT NULL,
    id_estudante INT NOT NULL,
    FOREIGN KEY (id_teste) REFERENCES testes(id),
    FOREIGN KEY (id_estudante) REFERENCES utilizadores(id)
);

CREATE TABLE inscricoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_estudante INT,
    id_disciplina INT,
    data_inscricao DATE DEFAULT(NOW()),
    FOREIGN KEY (id_estudante) REFERENCES utilizadores(id),
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id),
    UNIQUE (id_estudante, id_disciplina)
);