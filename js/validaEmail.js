let campoEmail = document.querySelector("#email");
let campoConfirmacaoEmail = document.querySelector("#confirmacao_email")


function validarConfirmacaoEmail(){
    let alerta = document.querySelector(".alerta__email");
    console.log(email);
    if ((campoEmail.value) != campoConfirmacaoEmail.value) {
        alerta.textContent = "Parece que os e-mails não conferem";
        alerta.classList.add("sucesso");
        alerta.classList.add("erro");
        return true
    } else {
        alerta.textContent = "pode seguir adiante, tudo certo!";
        alerta.classList.remove("erro");
        alerta.classList.add("sucesso");
        return false

    }
}