
alert("Bem vindo ao mundo de pokemon!");

var player = prompt("Me diga como você se chama mesmo?");

alert("É muito bom conhece você "+ player);

var inicial = prompt("Para iniciar sua jornada primeiro você precisa de um pokemon. Eu tenho 3 aqui: um charmander(1), um squirtle(2) e um bulbasauro(3). Qual você irá escolher?");

var pokemonInicial = inicial;
if(inicial == 1){
  var apelido = prompt("O charmander é um otimo pokemon do tipo fogo. Gostaria de dar um apelido a ele? (sim) (não)");
  if(apelido == "sim" || "Sim"){
    var apelidoDoPokemon = prompt("Digite o apelido para o pokemon")
    pokemonInicial = apelidoDoPokemon;
  }else{
    pokemonInicial = "charmander";
    alert("Pois bem, aqui estão suas pokebolas e seu pokedex. Boa sorte em sua jornada!");
  }
}else if(inicial == 2){
  var apelido = prompt("O squirtle é um otimo pokemon do tipo água. Gostaria de dar um apelido a ele? (sim) (não)");
  if(apelido == "sim" || "Sim"){
    var apelidoDoPokemon = prompt("Digite o apelido para o pokemon")
    pokemonInicial = apelidoDoPokemon;
  }else{
    pokemonInicial = "squirtle";
    alert("Pois bem, aqui estão suas pokebolas e seu pokedex. Boa sorte em sua jornada!");
  }
} else if(inicial == 3){
  var apelido = prompt("O bulbasauro é um otimo pokemon do tipo grama. Gostaria de dar um apelido a ele? (sim) (não)");
  if(apelido == "sim" || "Sim"){
   var apelidoDoPokemon = prompt("Digite o apelido para o pokemon")
    pokemonInicial = apelidoDoPokemon;
  }else{
    pokemonInicial = "bulbasauro";
    alert("Pois bem, aqui estão suas pokebolas e seu pokedex. Boa sorte em sua jornada!");
  }
}else{
  alert("Erro!");
}

alert("Após conseguir seu parceiro pokemon "+pokemonInicial+" você acaba encontrando um caterpie e entra em batalha com ele!");

var batalha = true;

if(batalha == true){
  alert("um caterpie Lv2 selvagem apareceu! e você manda "+pokemonInicial+" para a batalha");
  
  if(inicial == 1){
    var ataque = prompt("Escolha um ataque: Scratch(1),Ember(2)");
    if(ataque == 1){
      alert("caterpie derrotado!");
    }else if(ataque == 2){
      alert("Ataque super efetivo!");
      alert("caterpie derrotado!");
    }else{
      alert("Erro!");
    }
    
  }else if(inicial == 2){
    var ataque = prompt("Escolha um ataque: Tackle(1),Bubble(2)");
    if(ataque == 1){
      alert("caterpie derrotado!");
    }else if(ataque == 2){
      alert("caterpie derrotado!");
    }else{
      alert("Erro!");
    }
    
  }else if(inicial == 3){
    var ataque = prompt("Escolha um ataque: Tackle(1),Vine Whip(2)");
    
    if(ataque == 1){
      alert("caterpie derrotado!");
    }else if(ataque == 2){
      alert("Ataque não é muito efetivo");
      alert("caterpie derrotado!");
    }else{
      alert("Erro!");
    }
  }else{
    alert("Erro!");
  }
  
  batalha = false;
}