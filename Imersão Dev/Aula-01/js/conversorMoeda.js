//Conversor de Dolar U$ para Real R$ e Euro €
var botaoMoeda = document.querySelector("#botao-moeda");

botaoMoeda.addEventListener("click", function(){
  //pega o valor do input
  var valorEmReal = document.querySelector("#input-moeda").value;
  
  //converte o valor reais passado no input e converte para dolar e euro 
  var valorEmDolar = (valorEmReal*5.51).toFixed(2);
  var valorEmEuro = (valorEmReal*6.58).toFixed(2);
  
  var dolarConvertido = document.querySelector("#dolar-value");
  var euroConvertido = document.querySelector("#euro-value");
  
  dolarConvertido.innerHTML = " "+valorEmDolar;
  euroConvertido.innerHTML = " "+valorEmEuro;
});