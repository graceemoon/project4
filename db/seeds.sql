

INSERT INTO users (username, password)
VALUES 
("grace", "moon"), 
("dawa", "sherpa"),
("andrew", "diaz"),
("jaemin", "han");

INSERT INTO posts (user_id, post_title, post_content)
(1, "post one", "oh em gee i love ice cream"),
(2, "toast 2", "toast toast toast toast toast"),
(3, "post 3", "hello i like food"),
(4, "post 4", "why do i love food so much?"),
(4, "toast 5", "toast toast toast toast toast"),
(2, "post 6", "hello i like food"),
(1, "post 7", "why do i love food so much?");


INSERT INTO comments (user_id, post_id, com_content)
(2, 1, "blah blah"),
(1, 1, "blah blah"),
(4, 1, "blah blah"),
(3, 2, "blah blah"),
(2, 3, "blah blah");

