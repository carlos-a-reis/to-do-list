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
    tarefaItem.addEventListener('dblclick', itemCompleto);
    tarefaDeletada.push(tarefaItem);
    listaTarefas.appendChild(tarefaItem);
    inputTexto.value = '';
}

//muda a cor da tarefa selecionada(adicionar o evento na criação do item)
let tarefaSelecionada = document.getElementsByTagName('li');

function alterarCor(evento){
    for(let index = 0; index < tarefaSelecionada.length; index += 1){
        if(tarefaSelecionada[index].style.backgroundColor === 'grey'){
            tarefaSelecionada[index].style.backgroundColor = 'white';
        }
    }
    evento.target.style.backgroundColor = 'grey';
}

//item completo
function itemCompleto(evento){
    console.log(evento.target);
    if(evento.target.className === 'completed'){
        evento.target.className = '';
    }else {
        evento.target.className = 'completed';
    }
}

//apagar tarefas
let botaoApagar = document.getElementById('apaga-tudo');
botaoApagar.addEventListener('click', apagaTarefas);
let tarefaDeletada = [];

function apagaTarefas(evento){
    console.log(tarefaDeletada);
    for(let index = 0; index < tarefaDeletada.length; index += 1){
        document.getElementById('lista-tarefas').removeChild(tarefaDeletada[index]);
    }
    tarefaDeletada = [];
}

//remove tarefas finalizadas
let botaoFinalizado = document.getElementById('remover-finalizados');
botaoFinalizado.addEventListener('click', apagaFinalizadas);

function apagaFinalizadas(evento){
    console.log(tarefaDeletada);
    for(let index = tarefaDeletada.length -1; index >= 0; index -= 1){
        if(tarefaDeletada[index].className === 'completed'){
            document.getElementById('lista-tarefas').removeChild(tarefaDeletada[index]);
            tarefaDeletada.splice(index, 1);
        }
    }
}