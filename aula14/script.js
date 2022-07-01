/*
let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1)
console.log(num1.toString(2))


let temp = num1 * '5'

console.log(Number.isNaN(temp))
*/

let num1 = 0.7;
let num2 = 0.1;

 num1 += num2;
 num1 += num2;
 num1 += num2;

 num1 = Number(num1.toFixed(2));

 console.log(num1);
 console.log(Number.isInteger(num1));