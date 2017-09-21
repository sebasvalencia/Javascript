# Ejercicios en JS

## Clases ES6
```javascript
class Rectangulo{
    constructor(alto, largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }
}

let rectangulo = new Rectangulo(2,3);
console.log(`El area del rectangulo es = ${rectangulo.getArea()}`);
//Resultado : El area del rectangulo es 6
```