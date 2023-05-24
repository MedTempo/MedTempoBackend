CREATE TABLE IF NOT EXISTS medtempo.users(
    id text PRIMARY KEY,
    nome text,
    senha text
);

INSERT INTO medtempo.users(id,nome,senha) VALUES('1', 'habdig7','1234');

SELECT * FROM medtempo.users;