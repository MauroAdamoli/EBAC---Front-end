function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]2-[\d]5[\d]4/) ? this.value.replace(/-/, "()") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9._]+@[a-z0-9_]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function limpa_formulário_cep() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
}
else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

var cep = valor.replace(/\D/g, '');

if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)) {

        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";

        var script = document.createElement('script');

        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        document.body.appendChild(script);

    }
    else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
}
else {
    limpa_formulário_cep();
}
};

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var cep = document.getElementById("cep");
    var rua = document.getElementById("rua");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var uf = document.getElementById("uf");
    var ibge = document.getElementById("ibge");
  
    // verificar se o nome está vazio
    if (nome.value == "") {
      alert("Nome não informado");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
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
    if (cep.value == "") {
      alert("CEP não informado");
      cep.focus();
      return;
    }
    if (rua.value == "") {
        alert("Rua não informada");
        rua.focus();
        return;
    }
    if (bairro.value == "") {
        alert("Bairro não informado");
        bairro.focus();
        return;
    }
    if (cidade.value == "") {
        alert("Cidade não informada");
        cidade.focus();
        return;
    }
    if (uf.value == "") {
        alert("UF não informado");
        uf.focus();
        return;
    }
    if (ibge.value == "") {
        alert("IBGE não informado");
        ibge.focus();
        return;
    }
    alert("Formulário enviado com sucesso!");
    // envia o formulário
    //formulario.submit();
}