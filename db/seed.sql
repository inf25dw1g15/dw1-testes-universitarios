USE gestao_testes;
-- UTILIZADORES  (30 registos)
-- Professores + Estudantes

INSERT INTO utilizadores (nome, email, cargo) VALUES
('Ana Martins', 'ana.martins@umaia.pt', 'Estudante'),
('Rui Pereira', 'rui.pereira@umaia.pt', 'Estudante'),
('Carla Sousa', 'carla.sousa@umaia.pt', 'Estudante'),
('Tiago Mendes', 'tiago.mendes@umaia.pt', 'Estudante'),
('Beatriz Costa', 'beatriz.costa@umaia.pt', 'Estudante'),
('Pedro Lopes', 'pedro.lopes@umaia.pt', 'Estudante'),
('Mariana Silva', 'mariana.silva@umaia.pt', 'Estudante'),
('Fábio Gomes', 'fabio.gomes@umaia.pt', 'Estudante'),
('Inês Rocha', 'ines.rocha@umaia.pt', 'Estudante'),
('Daniel Soares', 'daniel.soares@umaia.pt', 'Estudante'),
('Cátia Mendes', 'catia.mendes@umaia.pt', 'Estudante'),
('Bruno Pires', 'bruno.pires@umaia.pt', 'Estudante'),
('Rita Faria', 'rita.faria@umaia.pt', 'Estudante'),
('Miguel Dias', 'miguel.dias@umaia.pt', 'Estudante'),
('Sara Leite', 'sara.leite@umaia.pt', 'Estudante'),

('João Almeida', 'joao.almeida@umaia.pt', 'Professor'),
('Maria Santos', 'maria.santos@umaia.pt', 'Professor'),
('Paulo Ferreira', 'paulo.ferreira@umaia.pt', 'Professor'),
('Sofia Rocha', 'sofia.rocha@umaia.pt', 'Professor'),
('Miguel Ribeiro', 'miguel.ribeiro@umaia.pt', 'Professor'),
('Helena Silva', 'helena.silva@umaia.pt', 'Professor'),
('Ricardo Mendes', 'ricardo.mendes@umaia.pt', 'Professor'),
('Joana Correia', 'joana.correia@umaia.pt', 'Professor'),
('Luís Cardoso', 'luis.cardoso@umaia.pt', 'Professor'),
('Patrícia Lima', 'patricia.lima@umaia.pt', 'Professor'),
('Hugo Tavares', 'hugo.tavares@umaia.pt', 'Professor'),
('Andreia Matos', 'andreia.matos@umaia.pt', 'Professor'),
('Nuno Faria', 'nuno.faria@umaia.pt', 'Professor'),
('Carolina Freitas', 'carolina.freitas@umaia.pt', 'Professor'),
('Eduardo Barros', 'eduardo.barros@umaia.pt', 'Professor');	


-- DISCIPLINAS 



INSERT INTO disciplinas (nome, numero_horas, id_professor) VALUES
('Programação I', 60, 16),
('Programação II', 50, 17),
('Estruturas de Dados', 45, 18),
('Desenvolvimento Web', 55, 19),
('Base de Dados', 40, 20),
('Redes de Computadores', 30, 21),
('Sistemas Operativos', 60, 22),
('Algoritmos', 45, 23),
('Engenharia de Software', 50, 24),
('Cibersegurança', 35, 25),
('Modelação UML', 30, 26),
('Inteligência Artificial', 40, 27),
('Compiladores', 50, 28),
('Informática Forense', 45, 29),
('Matemática Discreta', 60, 30),
('Big Data', 40, 16),
('Machine Learning', 50, 17),
('Administração de Sistemas', 55, 18),
('Cloud Computing', 35, 19),
('Criptografia', 30, 20),
('Arquitetura de Computadores', 45, 21),
('Fundamentos de TI', 40, 22),
('Linguagens de Programação', 50, 23),
('Gestão de Projetos', 30, 24),
('Web Avançado', 45, 25),
('DevOps', 40, 26),
('Análise de Dados', 50, 27),
('Estatística Computacional', 60, 28),
('Interfaces Homem-Máquina', 35, 29),
('Robótica', 55, 30);



-- TESTES 



INSERT INTO testes (tema, data, id_disciplina) VALUES
('Avaliação de Variáveis e Condições', '2025-03-01', 1),
('Manipulação de Funções e Arrays', '2025-03-02', 2),
('Estruturas Lineares e Listas Ligadas', '2025-03-03', 3),
('Introdução ao Node.js e Express', '2025-03-04', 4),
('JOINS, Views e Normalização', '2025-03-05', 5),
('Modelo OSI e TCP/IP', '2025-03-06', 6),
('Processos, Threads e Sincronização', '2025-03-07', 7),
('Recursividade e Backtracking', '2025-03-08', 8),
('Casos de Uso e Diagramas UML', '2025-03-09', 9),
('Fundamentos de Cibersegurança', '2025-03-10', 10),
('Diagramas de Classe e Sequência', '2025-03-11', 11),
('Introdução à Inteligência Artificial', '2025-03-12', 12),
('Análise Léxica e Sintática', '2025-03-13', 13),
('Investigação Digital e Evidências', '2025-03-14', 14),
('Conjuntos, Relações e Funções', '2025-03-15', 15),
('Fundamentos de Big Data', '2025-03-16', 16),
('Regressão Linear e Classificação', '2025-03-17', 17),
('Gestão de Utilizadores e Permissões', '2025-03-18', 18),
('Arquitetura Cloud e Virtualização', '2025-03-19', 19),
('Cifra de César e AES', '2025-03-20', 20),
('CPU, Memória e Pipeline', '2025-03-21', 21),
('Componentes de Hardware e Storage', '2025-03-22', 22),
('Sintaxe Avançada em Python', '2025-03-23', 23),
('Planeamento de Projetos Ágeis', '2025-03-24', 24),
('APIs REST e Autenticação JWT', '2025-03-25', 25),
('Pipelines CI/CD com Docker', '2025-03-26', 26),
('Introdução à Análise Estatística', '2025-03-27', 27),
('Estatística Descritiva e Probabilidade', '2025-03-28', 28),
('UX/UI – Princípios e Interação', '2025-03-29', 29),
('Sistemas Robóticos e Sensores', '2025-03-30', 30);



-- RESULTADOS 


INSERT INTO resultados (nota, id_teste, id_estudante) VALUES
(12.5, 1, 1),
(14.0, 2, 1),
(15.5, 3, 2),
(16.0, 4, 2),
(17.5, 5, 3),
(18.0, 6, 3),
(11.0, 7, 4),
(10.5, 8, 4),
(19.0, 9, 5),
(13.0, 10, 5),
(14.5, 11, 6),
(16.5, 12, 6),
(17.0, 13, 7),
(12.0, 14, 7),
(18.5, 15, 8),
(19.5, 16, 8),
(13.5, 17, 9),
(15.0, 18, 9),
(11.5, 19, 10),
(10.0, 20, 10),
(16.0, 21, 11),
(14.0, 22, 11),
(15.5, 23, 12),
(13.5, 24, 12),
(19.0, 25, 13),
(18.0, 26, 13),
(12.5, 27, 14),
(11.0, 28, 14),
(17.5, 29, 15),
(16.5, 30, 15);


INSERT INTO inscricoes (id_estudante, id_disciplina) VALUES
(1, 1), (1, 2),
(2, 3), (2, 4),
(3, 5), (3, 6),
(4, 7), (4, 8),
(5, 9), (5, 10),
(6, 11), (6, 12),
(7, 13), (7, 14),
(8, 15), (8, 16),
(9, 17), (9, 18),
(10, 19), (10, 20),
(11, 21), (11, 22),
(12, 23), (12, 24),
(13, 25), (13, 26),
(14, 27), (14, 28),
(15, 29), (15, 30);

