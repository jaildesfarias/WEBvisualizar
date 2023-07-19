const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const port = 3020;
const consultaController = require('./controllers/consultaController');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req, res) => {
  res.render('home');
});

router.get('/consulta', consultaController.realizarConsulta);

app.get('/filtro', (req, res) => {
  res.render('filtro');
});

app.get('/topo', (req, res) => {
  res.render('topo');
});

app.use(router);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

