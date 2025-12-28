let todos = [
  { name: "Learn JavaScript basics", completed: false },
  { name: "Practice DOM manipulation", completed: false },
  { name: "Build a To-Do app", completed: true },
  { name: "Understand render function", completed: false },
  { name: "Add delete feature", completed: false },
  { name: "Practice array & object", completed: true },
  { name: "Add complete toggle", completed: false },
  { name: "Improve UI design", completed: false }
];


const todosContainer = document.getElementById('todos')
const input = document.getElementById("new-todo");


function renderTodos() {
  todosContainer.innerHTML = ''

  todos.forEach((todo, index) => {

    const div = document.createElement("div")
    div.className = 'singleTodo'

    const todoTitle = document.createElement("div");
    todoTitle.className = "toto-title"

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    const text = document.createElement("p");
    text.textContent = todo.name;

    todoTitle.appendChild(checkbox)
    todoTitle.appendChild(text)

    div.appendChild(todoTitle)

    todosContainer.appendChild(div)
  })
}




function hide(id) {
  document.getElementById(id).style.display = 'none'
}
function show(id) {
  document.getElementById(id).style.display = 'block'
}


document.getElementById("add").addEventListener("click", () => {
  hide('todos')
})



document.getElementById("add-btn").addEventListener("click", (e) => {
  e.preventDefault()
  const inputValue = input.value;
  if (!inputValue.trim()) {
    alert("Please valid input value")
    return
  }
  const newTodo = {
    name: inputValue,
    completed: false
  }
  todos.push(newTodo)
  input.value = ''
  renderTodos()
})

renderTodos()