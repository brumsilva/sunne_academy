const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist/desafio_sunne'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/desafio_sunne/index.html')
});

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta' + PORT);
})


