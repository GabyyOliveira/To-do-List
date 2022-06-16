const FORM = document.getElementById('task-form');
const TASKLIST = document.getElementById('tasks');

FORM.onsubmit = function(e){
    e.preventDefault();

    const INPUTFIELD = document.getElementById('task-input');
    addTask(INPUTFIELD.value);
    FORM.reset();
}

function addTask(description){
    // Quando esta função for acionada, serão criados os seguintes elementos abaixo:
    const taskContainer = document.createElement('div')
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label')
    const taskDescription = document.createTextNode(description)

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description)
    newTask.setAttribute('id', description)

    taskLabel.setAttribute('for', description)
    taskLabel.appendChild(taskDescription)

    taskContainer.classList.add('task-item')
    taskContainer.appendChild(newTask)
    taskContainer.appendChild(taskLabel)

    TASKLIST.appendChild(taskContainer)
}