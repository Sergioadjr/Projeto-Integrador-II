let campoSenha = document.querySelector("#senha");
let campoConfirmacaoSenha = document.querySelector("#confirmacao_senha")


function validarConfirmacaoSenha(){
    let alerta = document.querySelector(".alerta__senha");
    console.log(senha);
    if ((campoSenha.value) != campoConfirmacaoSenha.value) {
        alerta.textContent = "Parece que senhas não conferem";
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