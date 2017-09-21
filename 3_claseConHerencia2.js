class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre(){
        return this.nombre;
    }

    getApellido(){
        return this.apellido;
    }

    getEdad(){
        return this.edad;
    }

    getNombreCompleto(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
    }
}

let empleadoUno = new Empleado("Andres", "Perez", 23);
let empleadoDos = new Empleado("Jorge", "Perez", 35);

console.log(`${empleadoUno.getNombreCompleto()}`);
console.log(`${empleadoDos.getNombreCompleto()} mi edad es ${empleadoDos.getEdad()}`);

//Resultado:
//Mi nombre es Andres Perez
//Mi nombre es Jorge Perez mi edad es 35