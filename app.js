// VARIABLES
const taskInput = document.getElementById("new-task"); 
const addButton = document.getElementsByTagName("button")[0];
const incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
const completedTasksHolder = document.getElementById("completed-tasks"); 

// Nouvelles taches
var createNewTaskElement = function(tasksName) {

// Créer les elements suivants :
    // li
    var listItem = document.createElement("li");
    // input checkbox
    var checkBox = document.createElement("input");
    // label
    var label = document.createElement("label");
    // input (text)
    var editInput = document.createElement("input");
    // button.edit
    var editButton = document.createElement("button");
    // button.delete
    var deleteButton = document.createElement("button");

    // modifie les els
    checkBox.type = "checkBox";
    editInput.type = "text";

    editButton.innerText = "Modifier";
    editButton.className = "edit";
    deleteButton.innerText = "Supprimer";
    deleteButton.className = "delete";

    label.innerText = tasksName;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Ajoute une nouvelle tache
var addTask = function() {

    console.log("Add Task...");

    var listItem = createNewTaskElement(taskInput.value);

    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";

}

// Modifie la tache
var editTask = function() {

    console.log("Edit Task...");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");


    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");

}

// Supprime la tache
var deleteTask = function () {

    console.log("Delete Task...");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);

}

// Coche la case
var taskCompleted = function() {

    console.log("Task Complete...");

    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}

// Décoche la case
var taskIncomplete = function() {

    console.log("Task Incomplete...");

    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

}

// Attribution 
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {

    console.log("Bind List item events");
    
    var checkBox = taskListItem.querySelector('input[type="checkbox"]');
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
    
}

// Evenement déclencheur
addButton.addEventListener("click", addTask); 