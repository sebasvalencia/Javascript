/**
 * Destructuración arreglos anidados
 */

let colores = [
    "rojo",
    ["verde", "amarillo"],
    "morado",
    "naranja"
];

let [color1, [color2,color3]] = colores;
console.log(`color1 ${color1}`);//color1 rojo
console.log(`color2 ${color2} ${color3}`);//color2 verde amarillo

let colores1 = ["rojo", "verde", "amarillo", "morado", "naranja"];
let [colorPrincipal, ...demasColores] = colores1;
console.log(`colorPrincipal es : ${colorPrincipal}`);//colorPrincipal es : rojo
console.log(`demasColores: ${demasColores}`);//demasColores: verde,amarillo,morado,naranja

//demasColores tiene largo de 0, con operadores rest solo funciona en los arreglos
let [colorPrincipal1,colorPrincipal2, ...demasColores1] = colores1;
console.log(`colorPrincipal1: ${colorPrincipal1}`);//colorPrincipal1: rojo
console.log(`colorPrincipal2: ${colorPrincipal2}`);//colorPrincipal2: verde
console.log(`demasColores1: ${demasColores1}`);//demasColores1: amarillo,morado,naranja


