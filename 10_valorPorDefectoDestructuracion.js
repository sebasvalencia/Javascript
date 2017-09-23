
/**
 * Destructuración valor por defecto
 */

let frutas = ['banano'];//Si no esta definida -> , 'pera'
let [fruta1, fruta2="manzana"] = frutas;
console.log(`fruta1 es ${fruta1}`);//fruta1 es banano
console.log(`fruta2 es ${fruta2}`);//fruta2 es pera

let opciones = {
    nombre:'sebas',
    edad: 32
};
let {nombre, edad=30} = opciones;
console.log(nombre, edad);//sebas 32

function saludar({nombre='sebas', pais='colombia'}) {
    console.log(`Hola soy ${nombre} de ${pais}`); //Hola soy pedro de panama
}

//Pasamos como parámetro de la función un objeto con los valores de las propiedades que queremos
saludar({
    nombre:'pedro', pais:'panama'
});

