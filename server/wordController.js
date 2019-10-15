const client = require('./wordModel.js');
const wordCtrl = {};

wordCtrl.addWordAndClue = values => {
  const text =
    "INSERT INTO words (word, clue) VALUES ($1, $2)";
    client.query(text, values, (err, result) => {
    if (err) console.log("ROW error", err);
    else {
      // console.log("");
    }
  });
}

wordCtrl.getWordAndClue = values => {
    const test = "SELECT word, clue FROM words ORDER BY RANDOM() LIMIT 1";
    client.query(text, values, (err, result) => {
      if (err) console.log("ROW error", err);
      else {
        return result;
      }
  });
}

wordCtrl.addWordAndClue(['hi', 'hi']);

module.exports = wordCtrl;