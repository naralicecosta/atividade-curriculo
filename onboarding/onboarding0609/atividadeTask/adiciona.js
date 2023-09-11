/*function adiciona() {
  const tarefasfazer = document.getElementById('tarefasfazer').value;
  let regexTesteTarefas = /\S+/;
  var listDeTarefas = document.getElementById('listaDeTarefas');

  var listaAdicionadas = listDeTarefas.innerHTML.split('<li>');

  var existeTarefa = listaAdicionadas.includes(tarefasfazer + '</li>');

  if (regexTesteTarefas.test(tarefasfazer) && !existeTarefa) {
    // Criar um novo elemento de lista (li)
    var novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = tarefasfazer;

    // Adicionar o novo elemento à lista de tarefas
    listDeTarefas.appendChild(novaTarefa);

    // Limpar o campo de entrada
    document.getElementById('tarefasfazer').value = '';
  } else {
    alert('Tarefa inválida ou já existe');
  }
}

  // Criar um novo elemento de lista (li) com botões de edição/exclusão
var novaTarefa = document.createElement('li');
novaTarefa.innerHTML =  `${novaTarefa}
<button class="btnAcao">
  <i class="fa fa-pencil"></i>
</button>
<button class="btnAcao">
  <i class="fa fa-trash"></i>
</button>
`;

  // Adicionar o novo elemento à lista de tarefas
listaDeTarefas.appendChild(novaTarefa);
  // Limpar o campo de entrada
tarefasfazer.value = ''

//funcao para editar
function editarTarefa(btnAcao){
  const tarefaParaEditar = btnAcao.parentNode;
  const tarefaTexto = tarefaParaEditar.firstChild.textContent;
  const editIndexInput = document.getElementById('editIndex')
  editIndexInput.value = tarefaTexto;
  tarefaParaEditar.remove();
  document.getElementById('tarefasfazer').value = tarefaTexto;
}
//// Função para excluir uma tarefa
function excluirTarefa(btnAcao) {
  const tarefaParaExcluir = btnAcao.parentNode;
  tarefaParaExcluir.remove();
}*/

// Função para adicionar uma nova tarefa
function adiciona() {
  const tarefaInput = document.getElementById('tarefasfazer');
  const tarefa = tarefaInput.value.trim();//.trim  retorna uma nova string com os espaços em branco removidos, mas não altera a string original.

  //vai exibir uma mensagem se não digitar nada no campo
  if (tarefa === '') {
    alert('Por favor, insira uma tarefa antes de adicionar.');
    return;
  }

  const listaDeTarefas = document.getElementById('listaDeTarefas');

  // Verifique se a tarefa já existe na lista
  const tarefasNaLista = listaDeTarefas.querySelectorAll('li');
  for (const tarefaNaLista of tarefasNaLista) {
    if (tarefaNaLista.textContent === tarefa) {
      alert('Esta tarefa já está na lista.');
      return;
    }
  }

  // Criar um novo elemento de lista (li) com botões de edição/exclusão
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = `
    ${tarefa}
    <div><button class="btnAcao" onclick="editarTarefa(this)" ><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="btnAcao" onclick="excluirTarefa(this)"><i class="fa-solid fa-trash"></i></button></div>
  `;

  // Adicionar o novo elemento à lista de tarefas
  listaDeTarefas.appendChild(novaTarefa);

  // Limpar o campo de entrada
  tarefaInput.value = '';
}

// Função para editar uma tarefa
function editarTarefa(button) {
  const tarefaParaEditar = button.parentNode.parentNode; 
  const tarefaTexto = tarefaParaEditar.firstChild.textContent.trim();
  const editIndexInput = document.getElementById('editIndex');
  editIndexInput.value = tarefaTexto; // Armazene o texto da tarefa no campo oculto
  tarefaParaEditar.remove(); // Remova a tarefa da lista
  document.getElementById('tarefasfazer').value = tarefaTexto; // Preencha o campo de entrada com a tarefa
}

// Função para excluir uma tarefa
function excluirTarefa(button) {
  const tarefaParaExcluir = button.parentNode.parentNode;//ajuda com Matheus
  tarefaParaExcluir.remove();
}
