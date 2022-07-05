/*
Primitivos (imutaéís) - string, number, boolean, underfined, null - Valores copiados

Referencia mutaveis - array, object , function - Passados por referencia

let a = [1,2,3];
let b = [...a];
let c = b
console.log(a,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);
*/


const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const b = a 

b.nome = 'Joao';
console.log(a);
console.log(b);