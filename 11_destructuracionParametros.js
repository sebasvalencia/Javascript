/**
 * Destructuración parámetros
 */


function crearJugador(apodo, {hp,sp, clase} = {}){
    console.log(apodo, hp, sp, clase);
}

crearJugador("Strider", {hp:100, sp:50, clase:"Mago"});
//Strider 100 50 Mago


crearJugador("wolverine");//wolverine undefined undefined undefined




