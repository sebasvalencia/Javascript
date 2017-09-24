/**
 Basicamente es tratar a las funciones como ciudadanos de primer orden
 Una función de alto orden es una función que es tratada como objetos
 Esto nos permite:
 * Almacenarlas en variables
 * Pasadas como argumentos
 * Retornar funciones
 */

function multiplicar1(valor){
    return valor * valor;
}
console.log(`Multiplicar 2*2 = ${multiplicar1(2)}`);//Multiplicar 2*2 = 4


//Almacenar en variable
let multiplicar2 = function(valor){
    return valor * valor;
};
const constanteMultiplica = multiplicar2;
console.log(`Multiplicar 3*3 = ${constanteMultiplica(3)}`);//Multiplicar 3*3 = 9

/*
    Pasadas como argumentos
    Con esto podemos crear callbacks
    Los callbacks son funciones que se ejecutan una vez se hayan terminado de ejecutar una o más funciones
    esto nos permite crear código asíncrono, porque JS es single Threaded y solo maneja un proceso
    a la vez.
    Esto nos permite tratar con datos o procesos que podrían tardar tiempo en ser resueltos,
    sin bloquear el sistema mientras estos se resuelven
    Cuando pasamos una función como argumento, esta se va a ejecutar tan pronto suceda el evento,
    y el sistema no se va a bloquear mientras espera que suceda esto.
*/
/*
    Creamos un button en el html
    <button id="boton">Click</button>
*/
const boton = document.getElementById('boton');
boton.addEventListener('click', imprimirValor);

function imprimirValor() {
    console.log(`Presione el boton`);
}

/*
    Retornar funciones
    Se puede utilizar funciones que seean templates de otras funciones y al hacer esto 
    podemos utilizar la composición que permite hacer es código mas mantenivle y esalable.
*/

let reemplazarTexto1 = function(texto){
    return texto.replace(/mal/ig, "increible");
};
console.log(reemplazarTexto1("Javascript es un mal lenguaje"));//Javascript es un increible lenguaje

let reemplazarTexto2 = function(textoOriginal, reemplazo){
    return (texto) => texto.replace(textoOriginal, reemplazo);
};
const reemplacePorJava = reemplazarTexto2(/Javascript/ig, "Java");
console.log(reemplacePorJava("Javascript es un mal lenguaje"));//Java es un mal lenguaje





