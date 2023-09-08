//recuperando elementos do html
let inputNovaTarefa = document.querySelector('#inputNovaTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefas = document.querySelector('#listaTarefas')

//manipulando os elementos
inputNovaTarefa.addEventListener('keypress', (e) =>{
    if(e.keycode == 13)//13 é a tecla ENTER
    {let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),//criar função para gerar o id
    }
    adicionarTarefa(tarefa)
    
}
        
})//evento de quando uma tecla for pressionada

//fazer o evento quando o botao de adicionar tarefa for clicado
btnAddTarefa.addEventListener('click',(e) => {
    //quando acontecer o click:
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),//criar função para gerar o id
    }
    adicionarTarefa(tarefa)
})


function gerarId(){
    return Math.floor(Math.random() * 3000)//math..random vai retornar um numero entre 1 e 3000 e math.floor vai colocar o numero em inteiro
}

function adicionarTarefa(tarefa){
    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li)
    inputNovaTarefa.value = ''

}
//adicionando os elementos html pelo js
function criarTagLI(tarefa){
    let li = document.createElement('li')//criando a tag li

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    /*let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao')
    btnEditar.innerHTML = '<i class="fa fa-pencil"></li>'
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')')

    let btnExcluir =document.createElement('button')
    btnExcluir.classList.add('btnAcao')
    btnExcluir.innerHTML = '<i class="fa fa-trash"></li>'
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

    div.appendChild(btnEditar)
    div.appendChild(btnExcluir)*/

    li.appendChild(span)
    li.appendChild(div)
    return li
}
/*function editar(idTarefa){
    alert(idTarefa)
}
function excluir(idTarefa){
    alert(idTarefa)
}*/