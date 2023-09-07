function getValueOfInput() {
    return document.getElementById('email').value
}

function validaEmail(email) {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

function existeEmail(email) {
    const listaDeEmails = document.getElementById('listaDeEmails')
    const listaDeEmailsArray = listaDeEmails.innerHTML.split('<li>')
    const emailExiste = listaDeEmailsArray.includes(email+'</li>')
    return emailExiste
}

function adicionaEmailNaLista(email) {
    const listaDeEmails = document.getElementById('listaDeEmails')
    listaDeEmails.innerHTML += `<li>${email}</li>`
}

function limpaInput() {
    document.getElementById('email').value = ''
}

function adiciona() {
  const email = getValueOfInput()
  const emailValido = validaEmail(email)
  const emailExiste = existeEmail(email)

  if (emailValido && !emailExiste) {
    adicionaEmailNaLista(email)
    limpaInput()
  } else {
    alert('Email inválido ou já existe na lista!')
  }
}