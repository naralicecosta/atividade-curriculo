function adiciona() {
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
    alert('Tarefa já existe');
  }
}










/*function adiciona() {
    const tarefasfazer = document.getElementById('tarefasfazer').value
    let regexTesteTarefas = /\S+@\S+\.\S+/
    var listaDeTarefas = document.getElementById('tarefasfazer')
  
    var listaTarefasAdicionadas = listaTarefasAdicionadas.innerHTML.split('<li>')
  
    var existeTarefa = listaTarefasAdicionadas.includes(tarefasfazer+'</li>')
  
    if (regexTesteTarefas.test(tarefasfazer) && !existeTarefa) {
      listaDeTarefas.innerHTML = listaDeTarefasinnerHTML + `<li>${listaDeTarefas}</li>`
    } else {
      alert('Tarefa inválida ou ja existe')
    }
  }*/