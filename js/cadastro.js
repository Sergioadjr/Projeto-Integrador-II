let conteudoForm1 = document.querySelector(".cadastro_1");
let conteudoForm2 = document.querySelector(".cadastro_2");
let botaoProximo = document.querySelector("#botao__proximo");
let campoCpf = document.querySelector("#cpf");
let botaoFinalizar = document.querySelector("#botao__finalizar");

botaoProximo.addEventListener("click", function(){
    if ( validaNome() && validaCpf() && validaSenha() && validaEmail()) {
        
        conteudoForm1.classList.remove("d-flex");
        conteudoForm1.classList.remove("flex-colunm");
        conteudoForm2.classList.remove("esconder");
        conteudoForm1.classList.add("esconder");
    } 
});

