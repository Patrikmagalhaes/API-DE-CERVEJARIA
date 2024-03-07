CREATE TABLE produtos (
   id SERIAL PRIMARY KEY,
   preco REAL NOT NULL,
   descricao VARCHAR(200) NOT NULL
)

INSERT INTO produtos
  (descricao, preco)
VALUES
  ('Playstation 5', 3500);