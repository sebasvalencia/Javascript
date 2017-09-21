

function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;

    this.getNombreCompleto = function(){
        return "Mi nombre es "+ this.nombre + " " + this.apellido;
    };

}

//Herencia por Delegación
Persona.prototype.nombreMayusculas = function(){
    return "Mi nombre es " + this.nombre.toUpperCase() + " " + this.apellido;
};

var juan = new Persona("juan", "perez");
console.log(juan.getNombreCompleto());
console.log(juan.nombreMayusculas());

console.log(juan instanceof Persona);
console.log(juan instanceof Object);
