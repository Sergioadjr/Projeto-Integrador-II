let conteudoForm1 = document.querySelector(".cadastro_1");
let conteudoForm2 = document.querySelector(".cadastro_2");
let botaoProximo = document.querySelector("#botao__proximo");
let campoCpf = document.querySelector("#cpf");
let botaoFinalizar = document.querySelector("#botao__finalizar");
let campoSenha = document.querySelector("#campo_senha");
let campoConfirmacaoSenha = document.querySelector("#confirmacao_senha")
let campoNome = document.querySelector("#nome");
let campoAlertaNome = document.querySelector(".alerta__nome");
let campoEmail = document.querySelector("#email");
let campoConfirmacaoEmail = document.querySelector("#confirmacao_email");
let cpf = document.querySelector("#cpf");

function validaCpf() {
    let mensagem = document.querySelector(".alerta__cpfInvalido");
    if (valida(cpf.value)) {
        mensagem.textContent ="Cpf válido";
        mensagem.classList.remove("erro");
        mensagem.classList.add("sucesso");
        return true;
    } else {
        mensagem.textContent="Preencha um Cpf válido";
        mensagem.classList.remove("sucesso");
        mensagem.classList.add("erro");
        return false;
    }
}

function valida(stringCPF) {
    let cpf = stringCPF.replaceAll('.', '').replace('-', '');
    if (cpf == '') {
        return false;
    }
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    let somaCpf = 0;
    for (let i = 0; i < 9; i++) {
        somaCpf += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let referencia = 11 - (somaCpf % 11)
    if (referencia == 10 || referencia == 11) {
        referencia = 0;
    }
    if (referencia != parseInt(cpf.charAt(9))) {
        return false;
    }

    somaCpf = 0
    for (let i = 0; i < 10; i++) {
        somaCpf += parseInt(cpf.charAt(i)) * (11 - i);
    }
    referencia = 11 - (somaCpf % 11);
    if (referencia == 10 || referencia == 11) {
        referencia = 0;
    }

    if (referencia != parseInt(cpf.charAt(10))){
        return false;
    }

    return true;
}


  $(document).ready(function(){
    let $mascaraCpf = $('#cpf');
    $mascaraCpf.mask('000.000.000-00', {reverse: true});
});

function validaEmail(){
    let alerta = document.querySelector(".alerta__email");
    if ((campoEmail.value) != campoConfirmacaoEmail.value) {
        alerta.textContent = "Há divergência nos e-mails informados.";
        alerta.classList.add("sucesso");
        alerta.classList.add("erro");
        return false;
    } else {
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
        return true;
    }
}
function validaNome() {
    let alerta = document.querySelector(".alerta__nome");
    if ((campoNome.value).trim() == "" || campoNome.value == null) {
        alerta.textContent = "Preencha um nome válido!"
        alerta.classList.add("erro");
        return false;
    } else {
        alerta.textContent = "Nome válido!"
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
        return true;
    }
}

function validaSenha(){
    let alerta = document.querySelector(".alerta__senha");
    if ((campoSenha.value) != campoConfirmacaoSenha.value) {
        alerta.textContent = "Há divergência nas senhas informadas.";
        alerta.classList.add("sucesso");
        alerta.classList.add("erro");
        return false;
    } else {
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
        return true;
    }
}

botaoProximo.addEventListener("click", function(){
    if ( validaNome() && validaCpf() && validaEmail() && validaSenha()) {
        
        conteudoForm1.classList.remove("d-flex");
        conteudoForm1.classList.remove("flex-colunm");
        conteudoForm2.classList.remove("esconder");
        conteudoForm1.classList.add("esconder");
    } 
});

