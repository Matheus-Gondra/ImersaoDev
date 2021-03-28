//Conversor de temperatura 

var botaoTemp = document.querySelector("#botao-temp");

botaoTemp.addEventListener("click", function(){
  //pega o valor do input
  var grausCelcius = document.querySelector("#input-temp").value;
  
  //converte a temperatura para Fahrenheit e Kelvin
  var grausFahrenheit = ((grausCelcius*9/5) + 32).toFixed(2);
  var grausKelvin = ((grausFahrenheit - 32)*5/9+273.15).toFixed(2);
  
  var fahrenheitConvertido = document.querySelector("#Fahrenheit-value");
  var kelvinConvertido = document.querySelector("#kelvin-value");
  
  fahrenheitConvertido.innerHTML = " "+grausFahrenheit;
  kelvinConvertido.innerHTML = " "+grausKelvin;
});