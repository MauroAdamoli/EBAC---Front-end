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

function validaNome(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const nomeValido = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
        if(this.value.match(nomeValido)) {
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

function validacaoCEP(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const CEPValido = /^\d{5}-?\d{3}$/;
        if(this.value.match(CEPValido)) {
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

function validacaoCel(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const CelValido = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
        if(this.value.match(CelValido)) {
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
let camposNome = document.querySelectorAll('input.nome');
let camposEmail = document.querySelectorAll('input.email');
let camposCEP = document.querySelectorAll('input.CEP');
let camposCel = document.querySelectorAll('input.cel');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for ( let emFoco of camposNome) {
    validaNome(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposCEP) {
    validacaoCEP(emFoco);
}

for (let emFoco of camposCel) {
    validacaoCel(emFoco);
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