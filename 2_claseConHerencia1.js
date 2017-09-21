
class Rectangulo{
    constructor(alto, largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }
}

//Clase que hereda
class Cuadrado extends Rectangulo{
    constructor(lado){        
        super(lado, lado);
    }

}

let cuadrado = new Cuadrado(4);
console.log(`El area de un cuadrado es = ${cuadrado.getArea()}`);
//Resultado: El area de un cuadrado es = 16

//Queremos saber de que tipo es cuadrado
console.log(cuadrado instanceof Cuadrado); //true
console.log(cuadrado instanceof Rectangulo);//true
