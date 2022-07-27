// Variables
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const field = document.getElementById("field").value

// const deleteBtn = document.querySelector(".delete-btn")

// Events
todoBtn.addEventListener('click', addTodo)
// deleteBtn.addEventListener('click', deleteTodo)


// Functions
function addTodo(event){

    event.preventDefault()
    // créer une div
    const createDiv = document.createElement('div')
    createDiv.classList.add("todo")
    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item");
    newTodo.innerText = field
    createDiv.appendChild(newTodo)

    // Bouton supprimer
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.classList.add("delete-btn")
    createDiv.appendChild(deleteBtn)

    // Ajoute notre div a notre list.
    todoList.appendChild(createDiv)
}

function deleteTodo(event){

    event.preventDefault()


}