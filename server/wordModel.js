const { Client } = require('pg');
const connectionString = 'postgres://tbhidzqq:r82chh82JAvMf3wAMiilT-0Xev6ugBeB@salt.db.elephantsql.com:5432/tbhidzqq';
const client = new Client({connectionString: connectionString});
const table = "CREATE TABLE IF NOT EXISTS words (_id SERIAL PRIMARY KEY, word VARCHAR, clue VARCHAR)";
client.query(table, (err, result) => {
    if (err) console.log("FIRST error", err);
    else {
      console.log('Word ');
    }
});

module.exports = client