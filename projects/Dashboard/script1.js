var imagenes = ["images/imagen1.jpg","images/imagen2.jpg","images/imagen3.jpg","images/imagen4.jpg","images/imagen5.jpg"]
var cont = 1
// Definiendo variables

var contenedor = document.getElementById("contenedor")
var imagen = document.getElementById("Imagen")
var muestra = document.getElementById("muestrasrc")


console.log("Hola Jose")
// definiendo funciones

function obtenerRutaRelativa(imagen) {
    const rutaAbsoluta = imagen.src;
    const rutaBase = window.location.href;
    const partesRutaAbsoluta = rutaAbsoluta.split('/');
    const partesRutaBase = rutaBase.split('/');
    
    let i;
    for (i = 0; i < partesRutaAbsoluta.length && i < partesRutaBase.length; i++) {
      if (partesRutaAbsoluta[i] !== partesRutaBase[i]) {
        break;
      }
    }
    
    const partesComunes = i;
    const partesRestantes = partesRutaAbsoluta.slice(partesComunes);
    const rutaRelativa = partesRestantes.join('/');
    return rutaRelativa;
    
  }

  function index(imagen){
    var index = imagenes.indexOf(obtenerRutaRelativa(imagen));
    return index;
  }

function mostrar(){
    const pepe = index(imagen) ;
    alert(pepe);
    
}

function cambia(){
    if (cont<imagenes.length){
        imagen.src=imagenes[cont];
        cont++;
        muestra.innerHTML=imagen.src;
    }
    else{
        cont = 0;
        imagen.src=imagenes[cont];
        cont++;
        muestra.innerHTML=imagen.src;

    }

}
//http://127.0.0.1:5500/projects/Dashboard/images/imagen4.jpg src imagen
//http:,,127.0.0.1:5500,projects,Dashboard,images,imagen1.jpg

//http://127.0.0.1:5500/projects/Dashboard/prueba.html window
//http:,,127.0.0.1:5500,projects,Dashboard,prueba.html

