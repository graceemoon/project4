const pg = require('pg-promise')();

const pgConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_NAME,
  user: process.env.PG_USER,
  password: process.env.PG_PASS };

const db = pg(process.env.DATABASE_URL || pgConfig);

module.exports = db;

