var express = require('express');
var router = express.Router();

/*var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];*/

var operadoras = {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2};


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(operadoras);
});

module.exports = router;
