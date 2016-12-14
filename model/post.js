const db = require('../lib/db-connect.js');

  // GETting all posts from db
  function getPosts(req, res, next) {

    db.any('SELECT * FROM posts ORDER BY id DESC;')
    .then((posts) => {
      res.posts = posts;
      console.log(res.posts)
      next();
    })
    .catch(error => next(error));
  }

  // // GET one post from db
  // function getAPost(req, res, next) {
  //   var aPostID = parseInt(req.params.id);
  //   db.one('SELECT * FROM posts WHERE id = $1;', aPostID)
  //   .then((posts) => {
  //     res.posts = posts;
  //     console.log(res.posts)
  //     next();
  //   })
  //   .catch(error => next(error));
  // }




  // creating a new post with POST hahaha
  function addPost(req, res, next) {
    db.one(
      `INSERT INTO posts (post_title, post_img, post_content)
      VALUES($/post_title/, $/post_img/, $/post_content/);`, req.body)
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




