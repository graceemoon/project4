/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
// const { authenticate }   = require('../lib/auth');

const indexRouter  = express.Router();

indexRouter.get('/', (req, res) => {
  res.json('helloooo')
})


module.exports = indexRouter;
