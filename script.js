//adiciona nova tarefa
let inputTexto = document.getElementById('texto-tarefa');
inputTexto.addEventListener('keyup', novaTarefa);
let tarefa;

let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaTarefa);
let listaTarefas = document.getElementById('lista-tarefas');


function novaTarefa(evento){
    console.log(evento.target.value);
    tarefa = evento.target.value;
}

function criaTarefa(evento){
    console.log(evento.target);
    let tarefaItem = document.createElement('li');
    tarefaItem.innerText = tarefa;
    listaTarefas.appendChild(tarefaItem);
    inputTexto.value = '';
}