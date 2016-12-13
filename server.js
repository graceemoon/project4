'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');


const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

const bodyParser = require('body-parser');

const methodOverride  = require('method-override');

const postRouter = require('./routes/post.js');


app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.use('/api', postRouter);

app.listen(PORT, () => {
  console.log('woof! 🐶');
});
