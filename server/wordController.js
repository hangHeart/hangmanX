const client = require('./wordModel.js');
const wordCtrl = {};

wordCtrl.addWordAndClue = values => {
  const text = 'INSERT INTO words (word, clue) VALUES ($1, $2)';
  client.query(text, values, (err, result) => {
    if (err) console.log('ROW error', err);
    else {
      // console.log("");
    }
  });
};

wordCtrl.getWordAndClue = (req, res, next) => {
  const text = 'SELECT word, clue FROM words ORDER BY RANDOM() LIMIT 1';
  client.query(text, (err, result) => {
    if (err) {
      console.log('ROW error', err);
    } else {
      // console.log(result);
      res.json(result.rows[0]);
    }
  });
};
// const fs = require('fs')
// const path = require('path');
// // const wordCtrl = require('/wordController.js');

// let x = fs.readFileSync(path.resolve(__dirname, 'American2.txt'));
// x = `${x}`;
// x = JSON.parse(x);
// x = x.slice(0,802);

// for(let i=0; i < x.length;){
//   wordCtrl.addWordAndClue([x[i], x[i+1]]);
//   i +=2;
// }

module.exports = wordCtrl;
