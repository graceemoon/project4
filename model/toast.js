const pg = require('pg-promise')({
  const config = {
    host:       process.env.DB_HOST,
    port:       process.env.DB_PORT,
    database:   process.env.DB_NAME,
    user:       process.env.DB_USER,
    password:   process.env.DB_PASS,
  };
})

const db = pg(config);

module.exports= {

  // GETting all posts from db
  getPosts(req, res, next) {
    db.any('SELECT * FROM posts;')
    .then((posts) => {
      res.rows = posts;
      next();
    })
    .catch(error => next(error));
  },

  // creating a new post with POST hahaha
  addPost(req, res, next) {
    db.one(
      'INSERT INTO posts (???) VALUES(???) returning *;', req.body)
    .then((post) => {
      res.rows = post;
      next();
    })
    .catch(error => next(error));
  }

  //PUT nnnahhhhh

  //DELETE 
  deletePost(req, res, next) {
    const pID = parseInt(req.params.id);
    db.none('DELETE FROM posts WHERE id = $1', pID)
    .then((deletePost) => {
      next();
    })
    .catch(error => next(error));
  }

}


module.exports = {
  {getPosts},
  {addPost},
  {deletePost}
}




