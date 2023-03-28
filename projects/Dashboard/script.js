// Obtain elements DOM

var imagen = document.getElementById("fullImg");
var imagenes = ["images/imagen1.jpg","images/imagen2.jpg","images/imagen3.jpg","images/imagen4.jpg","images/imagen5.jpg"]
var contenedor = document.getElementById("fullImgBox")

// Defining functions
//Close an image
function closeImg(){
    contenedor.style.display = "none";    
}
//Open an image
function openImg(reference){
    contenedor.style.display = "flex";
    imagen.src = reference;
    document.getElementById("muestrasrc").innerHTML=imagen.src
    
}
// Getting relative path of one image
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
// getting the image index in array images
function index(imagen){
    var index = imagenes.indexOf(obtenerRutaRelativa(imagen));
    return index;
}

function next(){
    cont = index(imagen);
    if (cont<imagenes.length-1){
        imagen.src=imagenes[cont+1];
        cont++;
        document.getElementById("muestrasrc").innerHTML=imagen.src
        }
    else{
        cont = 0;
        imagen.src=imagenes[cont];
        document.getElementById("muestrasrc").innerHTML=imagen.src
        cont++;
    }
}

function previous(){
    cont = index(imagen);
    if (cont>0){
        imagen.src=imagenes[cont-1];
        cont--;
        document.getElementById("muestrasrc").innerHTML=imagen.src
        }
    else{
        cont = imagenes.length-1;
        imagen.src=imagenes[cont];
        document.getElementById("muestrasrc").innerHTML=imagen.src
        cont--;
    }
}
