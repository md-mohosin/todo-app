let todos = [
  { name: "Learn JavaScript basics", completed: true },
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
const allTodoContainer = document.getElementById("all-todo-container")

let view = 'home'

function renderTodos() {
  todosContainer.innerHTML = ''


  let displayTodos;

  if (view === 'all') {
    displayTodos = todos;
  }
  else {
    displayTodos = todos.slice(0,5);
  }


  displayTodos.forEach((todo, idx) => {

    const div = document.createElement("div")
    div.className = 'singleTodo'


    const todoTitle = document.createElement("div");
    todoTitle.className = "toto-title"

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.style.cursor = 'pointer'


    checkbox.addEventListener('change', () => {
      todo.completed = !todo.completed
      renderTodos()
    })

    const taskName = document.createElement("p");
    taskName.textContent = todo.name;

    if (todo.completed) {
      taskName.style.textDecoration = 'line-through'
      taskName.style.textDecorationColor = "#08ee32ff";
    }

    const deleteBtn = document.createElement("img")
    deleteBtn.src = "./src/images/trash.png";
    deleteBtn.style.cursor = 'pointer'

    deleteBtn.addEventListener("click", () => {
      todos.splice(idx, 1)
      renderTodos()
    });

    todoTitle.appendChild(checkbox)
    todoTitle.appendChild(taskName)

    div.appendChild(todoTitle)
    div.appendChild(deleteBtn)

    todosContainer.appendChild(div)


    document.getElementById("all-task").innerText = todos.length

const complateTask = todos.filter(complateTodo => complateTodo.completed === true)
document.getElementById("complate").innerText = complateTask.length
  })
}




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
  todos.unshift(newTodo)
  input.value = ''
  renderTodos()
})


renderTodos()



function hide(id) {
  document.getElementById(id).style.display = 'none'
}
function show(id) {
  document.getElementById(id).style.display = 'block'
}



document.getElementById("home").addEventListener("click", () => {
  show("todos")
  hide('todo-add')
  view = 'home'
  renderTodos()
})


document.getElementById("add").addEventListener("click", () => {
  show("todo-add")
  hide('todos')
  renderTodos()
})


document.getElementById("all-todos").addEventListener("click", () => {
  view = 'all'
  hide('todo-add')
  show('todos')
  renderTodos()
})
