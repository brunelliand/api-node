var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var contatos = [
	{id:1,nome: "ANDRÉ BRUNELLI FERNANDES", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{id:2,nome: "cecília da rosa brunelli", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{id:3,nome: "joão dos santos", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
	{id:4,nome: "joana d'arc da silva", telefone: "9999-0000", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{id:1,nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{id:2,nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{id:3,nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{id:4,nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{id:5,nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
    if (contato.id == req.params.id) {
      res.json(contato);
      return;
    }    
  })
   res.status(404).end();
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.get('/operadoras/:id', function(req, res) {
  operadoras.forEach(function (operadora) {
    if (operadora.id == req.params.id) {
      res.json(operadora);
      return;
    }    
  })
   res.status(404).end();
});
