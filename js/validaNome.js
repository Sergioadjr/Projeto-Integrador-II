let campoNome = document.querySelector("#nome");
let campoAlertaNome = document.querySelector(".alerta__nome");

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