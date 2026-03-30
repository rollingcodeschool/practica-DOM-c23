function cambiarTitulo() {
  console.log("desde la funcion cambiar titulo");
  const titulo = document.getElementById("titulo-modificable");
  const titulo2 = document.getElementsByTagName("h2");
  console.log(titulo);
  console.log(titulo2);
  // modificar las propieadades de los titulos
  titulo.textContent = "Titulo nuevo";
  titulo.classList.add("text-primary");
  titulo2[2].textContent = "modificado con la funcion cambiartitulo()";
}

const ocultarTexto = () => {
  console.log("desde la funcion ocultar texto");
  const parrafo = document.querySelector("#parrafo-ocultar");
  parrafo.classList.toggle("d-none");
  if (btnOcultar.textContent === "Ocultar") {
    btnOcultar.textContent = "Mostrar";
    btnOcultar.classList.remove("btn-danger");
    btnOcultar.classList.add("btn-success");
  } else {
    btnOcultar.textContent = "Ocultar";
    btnOcultar.classList.remove("btn-success");
    btnOcultar.classList.add("btn-danger");
  }
};

const eliminarParrafo = ()=>{
    const parrafo = document.getElementById('parrafo-eliminar');
    parrafo.remove()
    btnEliminar[1].classList.add('disabled')
    // btnEliminar[1].className = 'btn btn-danger disabled'
}

const btnOcultar = document.querySelector(".btn-danger");
const btnEliminar = document.querySelectorAll(".btn-danger");

//agregar un manejador de eventos
btnOcultar.addEventListener("click", ocultarTexto);
// si la funcion tiene parametros guardarla en un callback
// btnOcultar.addEventListener('click', ()=> ocultarTexto('hola mundo'))
btnEliminar[1].addEventListener('click', eliminarParrafo)
