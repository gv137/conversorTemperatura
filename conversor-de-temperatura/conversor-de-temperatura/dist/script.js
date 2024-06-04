function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsiusNum = parseFloat(valor);

  var valorEmRealNum = valorEmCelsiusNum * 1.8 + 32;

  console.log(valorEmRealNum);

  var elementoValConv = document.getElementById("valorConvertido");
  var valorConvertido = "o resultado em °F é " + valorEmRealNum;
  elementoValConv.innerHTML = valorConvertido;
}

function ConverterEmKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsiusNum = parseFloat(valor);

  var valorEmKevinNum = valorEmCelsiusNum + 273.15;

  var valKelvin = document.getElementById("valorConvertido");
  var valorGeral = "o resultado em K é " + valorEmKevinNum;
  valKelvin.innerHTML = valorGeral;
}

function ConverterReamur() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsiusNum = parseFloat(valor);

  var valorEmReamur = valorEmCelsiusNum * 0.8;

  var valReamur = document.getElementById("valorConvertido");
  var valTotal = "o resultado em R é " + valorEmReamur;
  valReamur.innerHTML = valTotal;
}