const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const arredondabaixo = document.getElementById('arredondabaixo');
const arredondacima = document.getElementById('arredondacima');
const casasdecimais = document.getElementById('casasdecimais');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p>Raiz quadrada: <strong>${Math.sqrt(numero)}</strong></p>`
inteiro.innerHTML = `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`
nan.innerHTML = `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`
arredondabaixo.innerHTML = `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`
arredondacima.innerHTML = `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`
casasdecimais.innerHTML = `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`

