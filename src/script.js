//add new task
const button = document.getElementById('create-task');
button.addEventListener('click', createTask);
const taskList = document.getElementById('task-list');

function getTask() {
  const task = document.getElementById('task-text').value;
  return task;
}

function createTask() {
  const newTask = getTask();

  if (newTask !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerText = newTask;
    taskItem.addEventListener('click', changeColor);
    taskItem.addEventListener('dblclick', completeTask);

    taskList.appendChild(taskItem);
  }

  document.getElementById('task-text').value = ''
}

//change the color of the selected task
const tasks = document.getElementsByTagName('li');

function changeColor(event) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].style.backgroundColor === 'grey') {
      tasks[i].style.backgroundColor = '';
    }
  }
  event.target.style.backgroundColor = 'grey';
}

//complete task
function completeTask(event) {
  if (event.target.classList.value.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

//delete tasks
const deleteButton = document.getElementById('delete-tasks');
deleteButton.addEventListener('click', deleteTasks);

function deleteTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//delete finalized tasks
const finalizedButton = document.getElementById('delete-finalized');
finalizedButton.addEventListener('click', deleteFinalized);

function deleteFinalized() {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].className.includes('completed')) {
      taskList.removeChild(tasks[i]);
    }
  }
}
