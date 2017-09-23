/*
    La destructuración nos permite extraer datos de una manera para asignarlos a variables
*/

//Creamos un objecto literal con varias propiedades
let datosCuenta = {
    nombre: 'Sebas',
    email: 'sebastian.valencian@gmail.com',
    facebook:'facebook',
    google: 'google',
    numero:12345,
    premium: true
};

//ES5
let nombreES5 = datosCuenta.nombre;
let emailES5 = datosCuenta.email;
let facebookES5 = datosCuenta.facebook;
let googleES5 = datosCuenta.google;
let numeroES5 = datosCuenta.numero;
let premiumES5 = datosCuenta.premium;

//ES6
let {nombre, email, facebook, google, numero, premium} = datosCuenta;
console.log(`El nombre es ${nombre}`);//El nombre es Sebas
//el orden no altera la forma en la q se estructuran los objetos

//Se puede asignar las propiedades del objecto con nombres de variables diferentes:
let {nombre :nombre1} = datosCuenta;
console.log(nombre1);//Sebas

//Se puede agregar propiedades al objecto
let {nombre:nombre2, email:email2, direccion2='calle1'} = datosCuenta;
console.log(nombre2, email2, direccion2);

//Se puede agregar parametros opcionales si no esta definido en el objecto
let {nombre:nombre3, twitter:cuenta= "twitter"} = datosCuenta;
console.log(nombre3, cuenta);














