
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors_books CASCADE;



CREATE TABLE authors (
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
first_name VARCHAR,
last_name VARCHAR,
dob VARCHAR,
pob VARCHAR
);

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    title VARCHAR,
    released VARCHAR
);

CREATE TABLE authors_books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    authors_id BIGINT,
    books_id BIGINT,
FOREIGN KEY (authors_id) REFERENCES authors(id),
FOREIGN KEY (books_id) REFERENCES books(id)
);



INSERT INTO authors ( 
    first_name, 
    last_name, 
    dob,
    pob
)
VALUES 
('Moira', 'Rose', 1989, 'Springfield'),
('Moira', 'Jude', 1989, 'Springfield');

INSERT INTO books (
    title,
    released)

    VALUES
    ('Red Badge of Courage', '1800');

INSERT INTO authors_books (
    authors_id,
    books_id
)
VALUES 
(1,1),
(2,1)
;




