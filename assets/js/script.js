const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let capturaDados = JSON.stringify(data);

  localStorage.setItem('lead', capturaDados)

  let content = document.getElementById('content')

  let enviaMensagem = `<p>Enviando sua mensagem...</p>`

  let cadastraUsuario = `<p>Cadastro realizado com sucesso!</p>`

  content.innerHTML = enviaMensagem


  setTimeout(() => {
    content.innerHTML = cadastraUsuario
  }, 1000)

})