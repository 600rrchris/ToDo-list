module.exports = {
    all,
    create
}


var todos = [{
    todo: String,
    done: false
}]

function all(){
   return todos
}

function create(todo) {
    todos.push(todo);
  }