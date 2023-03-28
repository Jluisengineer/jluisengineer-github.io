// Obtener los elementos HTML
const imgContainer = document.querySelector('.image-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Definir un arreglo con las imágenes
const imagenes = ['imagen1.PNG', 'imagen2.PNG'];

// Definir una variable para el índice de la imagen actual
let indiceActual = 0;

// Función para mostrar la imagen actual
function mostrarImagen() {
  imgContainer.innerHTML = `<img src="images/${imagenes[indiceActual]}" alt="Imagen ${indiceActual + 1}">`;
}

// Función para avanzar a la siguiente imagen
function siguienteImagen() {
  if (indiceActual < imagenes.length - 1) {
    indiceActual++;
  } else {
    indiceActual = 0;
  }
  mostrarImagen();
}

// Función para retroceder a la imagen anterior
function imagenAnterior() {
  if (indiceActual > 0) {
    indiceActual--;
  } else {
    indiceActual = imagenes.length - 1;
  }
  mostrarImagen();
}

// Agregar eventos a los botones
prevButton.addEventListener('click', imagenAnterior);
nextButton.addEventListener('click', siguienteImagen);

// Mostrar la imagen inicial
mostrarImagen();