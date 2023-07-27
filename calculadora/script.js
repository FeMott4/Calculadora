//Chamar elemento do html
let exibicao =document.getElementById("exibicao");

// Exibir os valores
function exibir(tecla) {
  exibicao.value= exibicao.value + tecla;
}

// Operacao
function calcular() {
  exibicao.value = eval(exibicao.value);
}



// limpar
function apagar() {
  exibicao.value ="";
}

