const db = require('../lib/db-connect.js');

  // GETting all posts from db
  function getPosts(req, res, next) {
    db.any('SELECT * FROM posts;')
    .then((posts) => {
      res.posts = posts;
      next();
    })
    .catch(error => next(error));
  }

  // creating a new post with POST hahaha
  function addPost(req, res, next) {
    db.one(
      `INSERT INTO posts $/user_id/
      VALUES(user_id);`, req.body)
    .then((post) => {
      res.posts = post;
      next();
    })
    .catch(error => next(error));
  }

  //PUT nnnahhhhh

  //DELETE 
  function deletePost(req, res, next) {
    const pID = parseInt(req.params.id);
    db.none('DELETE FROM posts WHERE id = $1', pID)
    .then((deletePost) => {
      next();
    })
    .catch(error => next(error));
  }



module.exports = {
  getPosts,
  addPost,
  deletePost,
};




