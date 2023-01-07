const taskList = document.getElementById('task-list');
const tasks = document.getElementsByTagName('li');

//create list items
function createListItem(text, completed) {
  const listItem = document.createElement('li');
  const itemText = document.createElement('span');
  const editIcon = document.createElement('span');
  const deleteIcon = document.createElement('span');

  listItem.classList.add('task-item');
  itemText.innerText = text;
  itemText.classList.add('task');
  editIcon.innerText = 'E';
  editIcon.classList.add('edit');
  deleteIcon.innerText = 'x';
  deleteIcon.classList.add('delete');

  itemText.addEventListener('click', completeTask);
  editIcon.addEventListener('click', editTask);
  deleteIcon.addEventListener('click', deleteSelf);

  if(completed) {
    itemText.classList.add('line-through');
  }

  listItem.appendChild(itemText);
  listItem.appendChild(editIcon);
  listItem.appendChild(deleteIcon);

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
    const completed = tasks[i].firstChild.className.includes('line-through');
    const taskText = tasks[i].firstChild.innerText;
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

function createTask(event) {
  event.preventDefault();
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
  if (event.target.classList.value.includes('line-through')) {
    event.target.classList.remove('line-through');
  } else {
    event.target.classList.add('line-through');
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
    if (tasks[i].firstChild.className.includes('line-through')) {
      taskList.removeChild(tasks[i]);
    }
  }

  setLocalStorage();
}

//delete the task
function deleteSelf(event) {
  event.target.parentNode.remove();

  setLocalStorage();
}

//edit the task
const editForm = document.getElementById('edit-form');
const cancelEditButton = document.getElementById('cancel-edit');
const editInput = document.getElementById('edit-input');
const comfirmEditButton = document.getElementById('confirm-edit');

let editText = '';

cancelEditButton.addEventListener('click', cancelEdit);
comfirmEditButton.addEventListener('click', comfirmEdit);

function editTask(event) {
  editText = event.target.parentNode.firstChild;
  editInput.value = editText.innerText;
  editForm.hidden = false;
}

function cancelEdit() {
  editForm.hidden = true;
}

function comfirmEdit(event) {
  event.preventDefault();

  if(editInput.value !== '') {
    editText.innerText = editInput.value;
  } else {
    editText.parentNode.remove();
  }

  editForm.hidden = true;
  
  setLocalStorage();
}

//order the tasks
new Sortable(taskList, {
  animation: 150,
})
