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
    taskItem.addEventListener('dblclick', itemCompleto);

    taskList.appendChild(taskItem);
  }

  document.getElementById('task-text').value = ''
}

//change the color of the selected task
const selectedTask = document.getElementsByTagName('li');

function changeColor(event) {
  for (let i = 0; i < selectedTask.length; i += 1) {
    if (selectedTask[i].style.backgroundColor === 'grey') {
      selectedTask[i].style.backgroundColor = '';
    }
  }
  event.target.style.backgroundColor = 'grey';
}

//complete task
function itemCompleto(event) {
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
  tasks = document.getElementById('task-list')
  while (tasks.firstChild) {
    tasks.removeChild(tasks.firstChild);
  }
}

//remove tarefas finalizadas
let botaoFinalizado = document.getElementById('delete-finalized');
botaoFinalizado.addEventListener('click', apagaFinalizadas);

function apagaFinalizadas(evento) {
  console.log(tarefaDeletada);
  for (let index = tarefaDeletada.length - 1; index >= 0; index -= 1) {
    if (tarefaDeletada[index].className === 'completed') {
      document
        .getElementById('task-list')
        .removeChild(tarefaDeletada[index]);
      tarefaDeletada.splice(index, 1);
    }
  }
}
