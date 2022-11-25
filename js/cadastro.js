let conteudoForm1 = document.querySelector(".cadastro_1");
let conteudoForm2 = document.querySelector(".cadastro_2");
let botaoProximo = document.querySelector("#botao__proximo");

botaoProximo.addEventListener("click", function(){
    conteudoForm2.classList.remove("esconder");
    
    conteudoForm1.classList.remove("d-flex");
    conteudoForm1.classList.remove("flex-colunm");
    conteudoForm1.classList.add("esconder");
}) 

