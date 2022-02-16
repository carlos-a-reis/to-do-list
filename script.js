//adiciona nova tarefa
let inputTexto = document.getElementById('texto-tarefa');
inputTexto.addEventListener('keyup', novaTarefa);
let tarefa;

let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaTarefa);
let listaTarefas = document.getElementById('lista-tarefas');


function novaTarefa(evento){
    tarefa = evento.target.value;
}

function criaTarefa(evento){
    let tarefaItem = document.createElement('li');
    tarefaItem.innerText = tarefa;
    tarefaItem.addEventListener('click', alterarCor);
    listaTarefas.appendChild(tarefaItem);
    inputTexto.value = '';
}

//muda a cor da tarefa selecionada(adicionar o evento na criação do item)
let tarefaSelecionada = document.getElementsByTagName('li');

function alterarCor(evento){
    evento.target.style.backgroundColor = 'grey';
}
