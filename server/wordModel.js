const { Client } = require('pg');
// const connectionString = 'postgres://tbhidzqq:r82chh82JAvMf3wAMiilT-0Xev6ugBeB@salt.db.elephantsql.com:5432/tbhidzqq';
const client = new Client({
  user: 'tbhidzqq',
  host: 'salt.db.elephantsql.com',
  database: 'tbhidzqq',
  password: 'r82chh82JAvMf3wAMiilT-0Xev6ugBeB',
  port: 5432,
});
client.connect();
const table =
  'CREATE TABLE IF NOT EXISTS words (_id SERIAL PRIMARY KEY, word VARCHAR, clue VARCHAR)';
client.query(table, (err, result) => {
  if (err) console.log('FIRST error', err);
  else {
    console.log('Word ');
  }
});

const newTable =
  'CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, name VARCHAR, password VARCHAR, score INT)';
client.query(newTable, (err, result) => {
  if (err) console.log('FIRST error', err);
  else {
    console.log('User ');
  }
});

module.exports = client;
