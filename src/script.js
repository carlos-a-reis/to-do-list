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
    taskItem.addEventListener('click', alterarCor);
    taskItem.addEventListener('dblclick', itemCompleto);

    taskList.appendChild(taskItem);
  }

  document.getElementById('task-text').value = ''
}

//muda a cor da tarefa selecionada(adicionar o evento na criação do item)
let tarefaSelecionada = document.getElementsByTagName('li');

function alterarCor(evento) {
  for (let index = 0; index < tarefaSelecionada.length; index += 1) {
    if (tarefaSelecionada[index].style.backgroundColor === 'grey') {
      tarefaSelecionada[index].style.backgroundColor = 'white';
    }
  }
  evento.target.style.backgroundColor = 'grey';
}

//item completo
function itemCompleto(evento) {
  console.log(evento.target);
  if (evento.target.className === 'completed') {
    evento.target.className = '';
  } else {
    evento.target.className = 'completed';
  }
}

//apagar tarefas
let botaoApagar = document.getElementById('delete-tasks');
botaoApagar.addEventListener('click', apagaTarefas);
let tarefaDeletada = [];

function apagaTarefas(evento) {
  console.log(tarefaDeletada);
  for (let index = 0; index < tarefaDeletada.length; index += 1) {
    document.getElementById('task-list').removeChild(tarefaDeletada[index]);
  }
  tarefaDeletada = [];
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
