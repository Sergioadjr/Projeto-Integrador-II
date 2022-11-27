let campoEmail = document.querySelector("#email");
let campoConfirmacaoEmail = document.querySelector("#confirmacao_email");


function validaEmail(){
    let alerta = document.querySelector(".alerta__email");
    if ((campoEmail.value) != campoConfirmacaoEmail.value) {
        alerta.textContent = "Há divergência nos e-mails informados.";
        alerta.classList.add("sucesso");
        alerta.classList.add("erro");
        return true;
    } else {
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
        return false;
    }
}