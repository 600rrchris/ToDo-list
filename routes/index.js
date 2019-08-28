var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')
var Todo = require('../models/todos')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {todos: Todo.all()});
});

router.post('/', todosCtrl.create)

module.exports = router;
