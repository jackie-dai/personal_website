const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});