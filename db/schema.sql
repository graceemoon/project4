DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR NOT NULL,
	password VARCHAR NOT NULL
	created_on TIMESTAMP
);

CREATE TABLE posts(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	post_title VARCHAR,
	post_content VARCHAR,
	created_on TIMESTAMP
);

CREATE TABLE comments(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	post_id INT REFERENCES posts(id),
	com_content VARCHAR,
	created_on TIMESTAMP
);