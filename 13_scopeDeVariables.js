
/**
 * El scope de una variable hace referencia al lugar donde va a vivir esta.
 * Son tres: 
 * global
 * local
 * bloque
 */

 //Global
 //Se acceden en cualquier lugar de nuestro código, esto sucede cuando la variable
 //esta instanciada en el objecto window

 var variableGlobal = "Es una variable global";
 console.log(window.variableGlobal);//Es una variable global

var variable = 'esto es una variable';

function imprime() {
  console.log(`${variable} llamada dentro de una funcion`); //esto es una variable llamada dentro de una funcion
}
 
imprime();
console.log(`${variable} llamada fuera de una funcion`);//esto es una variable llamada fuera de una funcion

//Local
//Solo van a vivir en la función donde son creadas
let variables=function()  {
    var variableLocal = 'esto es una variable local';
    console.log(variableLocal); // esto es una variable local
  }();


  //Bloque
  function bloque(){
      const cont = 10;
      for (let i = 0; i < array.length; i++) {
          console.log(i);
      }
      //console.log(i);//imprimer error
  }

