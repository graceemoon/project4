/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
// const { authenticate }   = require('../lib/auth');
const postRouter  = express.Router();
const { getPosts, addPost, deletePost } = require('./../model/post.js');


postRouter.get('/', getPosts, (req, res) => {
  res.json(res.posts)
})


module.exports = postRouter;
