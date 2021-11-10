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
  const newTodo = input.value;

  if (!newTodo) return;

  todoList.push(newTodo);
  console.log(todoList);
}
