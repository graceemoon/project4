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
  //   db.one('SELECT * FROM posts WHERE id = $1;', req.params.id)
  //   .then((posts) => {
  //     res.posts = posts;
  //     console.log(res.posts)
  //     next();
  //   })
  //   .catch(error => next(error));
  // }




  // creating a new post with POST hahaha
  function addPost(req, res, next) {
    // console.log('**** inside model', req.body)
    db.none(
      `INSERT INTO posts (post_title, post_img, post_content)
      VALUES($/post_title/, $/post_img/, $/post_content/);`, req.body)
    // db.none(`INSERT INTO posts (post_title, post_img, post_content
    //          VALUES($1, $2, $3)`, [req.body.post_title, req.body.post_img, req.body.post_content])
    .then((post) => {
      // res.posts = post;
      next();
    })
    .catch(error => next(error));
  }

  //PUT 

  //DELETE 
  function deletePost(req, res, next) {
    // const pID = parseInt(req.params.id);
    // console.log(pID)
    db.none('DELETE FROM posts WHERE id = $/id/', req.params)
    .then((results) => {
      next();
    })
    .catch(error => next(error));
  }





module.exports = {
  getPosts,
  addPost,
  deletePost,
};




