
var botao = document.querySelector(".botao-resposta");
var recarregar = document.querySelector("#recarregar");
var mensagem = document.querySelector("#mensagem");
var numeroSorteado = parseInt((Math.random()*(30-10)+10));
var tentativas = 3;

function escrever(texto){
    return mensagem.innerHTML = texto;
}

escrever("Escolhar um número entre 10 e 30");

botao.addEventListener("click", function(){
   
    
         var resposta = document.querySelector("#resposta-input").value;
    
        if(resposta == numeroSorteado){
            escrever("Você acertou");
            
        }else if(resposta > numeroSorteado){
            escrever("O número sorteado é menor");
            tentativas--;
        }else if(resposta < numeroSorteado){
            escrever("O número sorteado é maior");
            tentativas--
        }
    
    if(resposta != numeroSorteado && tentativas == 0){
        escrever("Suas tentativas acabaram. O número sorteado era "+ numeroSorteado);
    }
});

recarregar.addEventListener("click", function(){
    document.location.reload();
});