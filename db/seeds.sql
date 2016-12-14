INSERT INTO users (id, username, password) VALUES 
	(1, 'grace', 'moon'), 
	(2, 'dawa', 'sherpa'),
	(3, 'andrew', 'diaz'),
	(4, 'jaemin', 'han');

INSERT INTO posts (user_id, post_title, post_content, post_img) VALUES
	(1, '1-milky puff', 'milky puff milky puff milky puff milky puff milky puff milky puff milky puff milky puff milky puff milky puff milky puff milky puff ', 'http://i.imgur.com/kapmBdR.png'),
	(2, '2-strawberry bubbles', 'strawberry bubblesstrawberry bubblesstrawberry bubblesstrawberry bubblesstrawberry bubblesstrawberry bubblesstrawberry bubbles', 'http://i.imgur.com/rrqaLSu.png'),
	(3, '3-green tea waffle', 'waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle waffle', 'http://i.imgur.com/UMvWJzf.png'),
	(4, '4-green tea fishyfishfish ice cream', 'fishyfishfish ice cream fishyfishfish ice cream fishyfishfish ice cream fishyfishfish ice cream fishyfishfish ice cream fishyfishfish ice cream fishyfishfish ice cream fishyfishfish ice cream', 'http://i.imgur.com/frr0Ips.png'),
	(4, '5-baby cakes', 'toast toast toast toast toast', 'http://i.imgur.com/HHjE1XH.png'),
	(2, '6-doughnut injections', 'methydoughnuts', 'http://i.imgur.com/3ELwt9H.png'),
	(1, '7-waffles speculooooos', 'speculoos wa wa wa wa wafflesssss', 'http://i.imgur.com/QJvLF7C.png'),
	(1, '8-cookie milkshake', 'coooookie', 'http://i.imgur.com/6pIzq26.png'),
	(1, '9-nutella & dulce de leche churros', 'churroooosssss are so gewwwdddddd :Q', 'http://i.imgur.com/GXSrukt.png'),
	(1, '10-melt ice cream sammiches', 'ice cweam sammichesssss', 'http://i.imgur.com/i8HLJ7c.png'),
	(1, '11-potted plant milk tea', 'potted plant milk teeeyyyyy & lemonnnn teeyyy', 'http://i.imgur.com/f5MyiCf.png'),
	(1, '12-green tea lava cake', 'greeeeeeeeeeeeeennnnnnn teaaaaaaaaaaa caaaaaaaaaaaaaakeeeeee gaaaaaahhhhhh!!!', 'http://i.imgur.com/eGxPE4Z.png'),
	(1, '13-matchabar tea', 'nom nom nom', 'http://i.imgur.com/4caeRZb.png'),
	(1, '14-green tearamisu', 'izzz aiight', 'http://i.imgur.com/z8S4cJk.png'),
	(1, '15-green tea black sesame ice cream', 'izzz aiight', 'http://i.imgur.com/z8S4cJk.png'),
	(1, '16-green apple tarte tatin', 'holyyyyy delishiousnessss!', 'http://i.imgur.com/hVDcjQx.png'),
	(1, '17-mint ice cream tarte', 'mmmmm the decor', 'http://i.imgur.com/6Uvns6c.png'),
	(1, '18-very berry napoleon', 'meh overrated', 'http://i.imgur.com/N4LzybP.png');


INSERT INTO comments (user_id, post_id, com_content) VALUES
	(2, 1, 'blah blah'),
	(3, 1, 'blah blah'),
	(4, 1, 'blah blah'),
	(1, 2, 'blah blah'),
	(2, 3, 'blah blah');

