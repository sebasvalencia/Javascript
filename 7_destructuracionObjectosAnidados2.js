
/**
 Destructuración objectos anidados
 */

let persona ={
     id:1,
     datosPersonales:{
        nombre: "Sebas",
        email: "sebastian.valencian@gmail.com"
     },
     localizacion:{
        direccion: "Cra 1",
        ubicacion:{
            pais:"Colombia",
            municipio: "Bogota"
        }
     }
};

let {datosPersonales: datosPersona} = persona;
console.log(datosPersona);//{nombre: "Sebas", email: "sebastian.valencian@gmail.com"}

let {localizacion : {ubicacion:localizacion1}} = persona;
console.log(localizacion1);//{pais: "Colombia", municipio: "Bogota"}


