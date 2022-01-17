CREATE TABLE "gallery"(
id SERIAL PRIMARY KEY,
"pic" VARCHAR (100000),
"description" VARCHAR (10000),
"likes" INTEGER);

INSERT INTO "gallery" 
	("pic" , "description", "likes")
VALUES ('/images/yin-yang-tiger-dragon.jpg', 'Tattoo on my right shoulder', 0);
