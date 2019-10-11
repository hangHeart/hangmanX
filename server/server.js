const express = require('express');

const app = express();
const PORT = 4000;

app.get('/api', (req, res) => {
  console.log("api endpoint");
  return res.status(200).json({ 'hello': true });
});

app.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});