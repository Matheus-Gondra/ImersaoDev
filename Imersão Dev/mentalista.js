var numeroSecreto = parseInt(Math.random()*(20-10)+10);
var tentativas = 3;


while(tentativas > 0){
  var chute = parseInt(prompt("Digite um número entre 10 e 20"));
  
  if(numeroSecreto == chute){
    console.log("Acertou");
    break;
  }else if(chute > numeroSecreto){
    alert("O número secreto é menor");
    tentativas--;
  }else if(chute < numeroSecreto){
    alert("O número secreto é maior");
    tentativas--
  }else{
    console.log("Errou. O número secreto era "+numeroSecreto);
  }
}

if(chute != numeroSecreto){
  alert("Suas tentativas acabaram. O número secreto era "+numeroSecreto);
}