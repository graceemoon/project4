const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');
// const methodOverride  = require('method-override');
const postRouter = require('./routes/post.js');

const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

app.use(logger(isDev ? 'dev' : 'common'));
app.use(express.static(path.join(__dirname, 'dist')));
// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));

app.use('/api', postRouter);

app.listen(PORT, () => {
  console.log('woof! 🐶');
});
