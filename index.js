const form = document.getElementById("form");
const input = document.getElementById("input");
// const button = document.getElementById("button");
const todo = document.getElementById("todo");
let todoList = [];

// submition of form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submitted");

  addTodo();
});

function addTodo() {
  // input value is new TODO
  const newTodo = input.value;
  // check for todo inputs, if none return
  if (!newTodo) return;

  // push the newtodo input into the todoList array
  todoList.push({
    text: newTodo,
    completed: false,
  });
  console.log(todoList);

  // push to local storage
  localStorage.setItem("todos", JSON.stringify(todoList));

  // Set input back to empty
  input.value = "";

  render();
}

function render() {
  const prevTodos = localStorage.getItem("todos");
  console.log(prevTodos);
  todoList = JSON.parse(prevTodos) || [];
  console.log(todoList);
}
