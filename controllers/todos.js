var Todo = require('../models/todos');

module.exports = {
    create
}

function create(req, res) {
    Todo.create(req.body);
    res.redirect('/');
  }