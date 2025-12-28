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

const singletodo = todos.map(todo => {
    const div = document.createElement("div")

    div.innerHTML=`
    <div class="singleTodo">
        <div class="toto-title">
          <input type="checkbox" name="" id="">
          <p>${todo.name}</p>
        </div>
        <img src="./src/images/trash.png" alt="">
      </div>
    `
    todosContainer.appendChild(div)
})