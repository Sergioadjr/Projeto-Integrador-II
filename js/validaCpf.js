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