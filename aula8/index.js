const primeiroNome = 'Douglas Correa';
const segundoNome = 'Gomes';
const idade = 30;
const peso = 92;
const alturaEmM = 1.75;
let imc = peso / (alturaEmM*alturaEmM);
let anoDeNascimento = 2022 - 30;

console.log(`${primeiroNome} ${segundoNome} tem ${idade} anos,pesa ${peso} Kg, tem  ${alturaEmM} de altura, é seu IMC  é de ${imc}.`)
console.log(`${primeiroNome} nasceu em ${anoDeNascimento}.`);
