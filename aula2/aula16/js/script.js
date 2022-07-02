const peso = Number(prompt('Digite seu peso!'));
const altura = Number(prompt('Digite sua altura'));

const imcResultado = document.getElementById('imc-resultado');


imcResultado.innerHTML = `Seu IMC e de: ${peso/(altura*altura)}`;

