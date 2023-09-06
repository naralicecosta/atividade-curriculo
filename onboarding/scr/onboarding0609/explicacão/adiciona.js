function adiciona() {
    const email = document.getElementById('email').value
    let regexTesteEmail = /\S+@\S+\.\S+/
    var listDeEmail = document.getElementById('listaDeEmails')
  
    var listaEmailsAdicionados = listDeEmail.innerHTML.split('<li>')
  
    var existeEmail = listaEmailsAdicionados.includes(email+'</li>')
  
    if (regexTesteEmail.test(email) && !existeEmail) {
      listDeEmail.innerHTML = listDeEmail.innerHTML + `<li>${email}</li>`
    } else {
      alert('E-mail inválido ou ja existe')
    }
  }