
function adiciona() {
  const tarefas = document.getElementById('tarefasfazer').value
  let regexTesteTarefas = /\S+\.\S+/


  var listaDeTarefas = document.getElementById('listaDeTarefas')

  var listaAdicionadas = listaDeTarefas.innerHTML.split('<li>')

  var existeTarefa = listaAdicionadas.includes(tarefasfazer+'<li>')
  alert(tarefas)

  if(regexTesteTarefas.test(tarefas)&& ! existeTarefa){
    listaDeTarefas.innerHTML = listaDeTarefas.innerHTML + `<li>${tarefas}</li>`
  } else {
    alert('Tarefa ja existe')
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