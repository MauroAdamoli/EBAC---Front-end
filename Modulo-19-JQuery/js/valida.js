
function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
  
    if (nome.value == "") {
      alert("Nome não informado");
  
      nome.focus();
      return;
    }
    if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
    }
    if (tel.value == "") {
      alert("Telefone não informado");
      tel.focus();
      return;
    }
    alert("Cadastro preenchido com sucesso!");
  }