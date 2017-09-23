/**
 Destructuración de arreglos
 */

let frutas = ['banano', 'pera', 'uva'];

let [fruta1, fruta2, fruta3] = frutas;
console.log(`Frutas1: ${fruta1}, ${fruta2}, ${fruta3}`);//Frutas: banano, pera, uva

//Para ignorar un elemento
let [banano , , uva] = frutas;
console.log(`Frutas2: ${banano}, ${uva}`);//Frutas2: banano, uva

let nuevaFruta = 'manzana';
[nuevaFruta] = frutas;
console.log( nuevaFruta);//banano

//Se quiere intercambiar el valor de dos variables
let a = 1;
let b = 2;
let temp;

//ES5
temp = a;
a = b;
b = temp;
console.log(`Valor de a = ${a}`);//Valor de a = 2
console.log(`Valor de b = ${b}`);//Valor de b = 1

//ES6
let c = 3;
let d = 4;
[c,d] = [d,c];
console.log(`ES6 c = ${c}`);//ES6 c = 4
console.log(`ES6 d = ${d}`);//ES6 d = 3



