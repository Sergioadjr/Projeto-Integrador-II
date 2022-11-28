let campoSenha = document.querySelector("#campo_senha");
let campoConfirmacaoSenha = document.querySelector("#confirmacao_senha")


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