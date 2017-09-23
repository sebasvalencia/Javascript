
/*
    Para entender This la clave es entender donde se invoca
*/

//-----------------------------------------Asignación implícita----------------------------

//Caso 1:
let juan = {
    nombre : 'Juan',
    edad: 30,
    hablar:function(){
        console.log(this.nombre);
        //El this hace referencia al objeto que contiene el método
    }
};
console.log(juan.hablar()); //Juan

//Caso 2:
let imprimirNombre = function(persona){
    persona.hablar = function(){
        console.log(this.nombre);
        //El this hace referencia al objecto que se se paso como parámetro y se le añadió el método
    };
};
const mauro = {
    nombre:'Mauro',
    edad:28
}
imprimirNombre(mauro);
mauro.hablar();//Mauro

//Caso 3:
let Persona = function(nombre, edad){
    return {
        nombre: nombre,
        edad:edad,
        hablar: function(){
            console.log(this.nombre);
            //El this hace referencia al objecto que contiene el método donde se invoca
        }
    };
};
const francesco = Persona('Francesco', 34);
console.log(francesco.hablar());//Francesco

//-----------------------------------------Asignación explícita----------------------------

let saludo = function(idioma1, idioma2){
    console.log(`Hola mi nombre es ${this.nombre} y hablo ${idioma1} y ${idioma2}`);
};

const pedro = {
    nombre: 'Pedro',
    edad: 34
};
const idiomas = ['español','ingles'];

//Ahora vamos a referenciar la variable pedro para que sea el this

//Call()
saludo.call(pedro, idiomas[0], idiomas[1]); //Hola mi nombre es Pedro y hablo español y ingles

//Aplly()
saludo.apply(pedro, idiomas);//Hola mi nombre es Pedro y hablo español y ingles

//Bind()
const saludoPedro = saludo.bind(pedro, idiomas[0], idiomas[1]);
console.log(saludoPedro());//Hola mi nombre es Pedro y hablo español y ingles

//-----------------------------------------Asignación con new----------------------------

let Animal = function (nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}

//Caso 1:
const tigre = new Animal('tigre', 'felino');
tigre.nombre = 'Tigrita';
console.log(tigre.nombre);//Tigrita

//Caso 2:
const miTigre = Object.create(Animal);
miTigre.nombre = 'Tigrito';
console.log(miTigre.nombre);//Tigrito

