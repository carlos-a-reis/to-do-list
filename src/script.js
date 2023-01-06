const taskList = document.getElementById('task-list');
const tasks = document.getElementsByTagName('li');

//create list items
function createListItem(text, completed) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.addEventListener('click', completeTask);

  if(completed) {
    listItem.classList.add('completed');
  }

  return listItem;
}

//get items from localStorage
if (localStorage.getItem('to-do-list')) {
  const localList = JSON.parse(localStorage.getItem('to-do-list'));
  for (let i = 0; i < localList.length; i += 1) {
    const localItem = createListItem(localList[i].taskText, localList[i].completed);
    
    taskList.appendChild(localItem);
  }
}

//set localStorage items
function setLocalStorage() {
  const tasksArray = [];
  for (let i = 0; i < tasks.length; i += 1) {
    const completed = tasks[i].className.includes('completed');
    const taskText = tasks[i].innerText;
    tasksArray.push({ taskText, completed });
  }

  localStorage.setItem('to-do-list', JSON.stringify(tasksArray))
}

//add new task
const button = document.getElementById('create-task');
button.addEventListener('click', createTask);

function getTask() {
  const task = document.getElementById('task-text').value;
  return task;
}

function createTask() {
  const newTask = getTask();

  if (newTask !== '') {
    const taskItem = createListItem(newTask, false);

    taskList.appendChild(taskItem);
  }
  
  setLocalStorage();

  document.getElementById('task-text').value = '';
}

//complete task
function completeTask(event) {
  if (event.target.classList.value.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }

  setLocalStorage();
}

//delete tasks
const deleteButton = document.getElementById('delete-tasks');
deleteButton.addEventListener('click', deleteTasks);

function deleteTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  setLocalStorage();
}

//delete finalized tasks
const finalizedButton = document.getElementById('delete-finalized');
finalizedButton.addEventListener('click', deleteFinalized);

function deleteFinalized() {
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    if (tasks[i].className.includes('completed')) {
      taskList.removeChild(tasks[i]);
    }
  }

  setLocalStorage();
}

//order the tasks
new Sortable(taskList, {
  animation: 350,
})
