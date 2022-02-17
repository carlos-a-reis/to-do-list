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
        for(let index = 0; index < tarefaSelecionada.length; index += 1){
            if(tarefaSelecionada[index].className === 'completed'){
                tarefaSelecionada[index].className = '';
            }
        }
        evento.target.className = 'completed';
    }
}
