/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
// const { authenticate }   = require('../lib/auth');
const postRouter  = express.Router();
const { getPosts, addPost, deletePost } = require('./../model/post.js');

//get
postRouter.get('/', getPosts, (req, res) => {
  res.json(res.posts)
})

//delete
postRouter.delete('/:id', deletePost, (req, res) => {
	console.log('delete route')
  res.status(204).end()
});

//post
postRouter.post('/newpost', addPost, (req, res) => {
  res.json(res.posts || []);
});


module.exports = postRouter;
