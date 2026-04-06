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

const eliminarParrafo = () => {
  const parrafo = document.getElementById("parrafo-eliminar");
  parrafo.remove();
  btnEliminar[1].classList.add("disabled");
  // btnEliminar[1].className = 'btn btn-danger disabled'
};

function crearTarea(e) {
  e.preventDefault();
  // acceder al valor del input del formulario
  const tarea = document.getElementById("tarea").value;
  //? opcion 1
  const ul = document.querySelector(".list-group"); // nodo padre
  // const item = document.createElement("li"); // <li> </li> // nodo hijo
  // item.classList.add("list-group-item");
  // item.textContent = tarea;
  // ul.appendChild(item);
  //?opcion 2
  ul.innerHTML += `<li class="list-group-item">${tarea}</li>`;
  //resetear el formulario
  formTarea.reset();
}
// setTimeout: ejecutar una funcion pasado cierto tiempo en ms
// setInterval: ejecutar una funcion cada cierto tiempo en ms
function activarCartel() {
  setTimeout(() => {
    const alert = document.querySelector(".alert");
    alert.classList.remove("d-none");
  }, 3000);
}

function detenerReloj(){
  console.log('estoy en la funcion que detiene el reloj')
  clearInterval(idInterval)
}

function crearPersona(e){
  e.preventDefault()
  console.log('Estoy en la funcion crear Persona')
  //crear el objeto persona
  const nombre = document.getElementById('nombre').value
  const yearNacimiento = document.getElementById('anio').value

  const persona = {
  nombre,
  yearNacimiento,
  generaciones: [
    { min: 1994, max: 2010, nombre: "Z", rasgo: "Irreverencia" },
    { min: 1981, max: 1993, nombre: "Y", rasgo: "Frustración" },
    { min: 1969, max: 1980, nombre: "X", rasgo: "Obsesión por el éxito" },
    { min: 1949, max: 1968, nombre: "Baby Boom", rasgo: "Ambición" },
    { min: 1930, max: 1948, nombre: "Silent Generation", rasgo: "Austeridad" },
  ],
  mostrarGeneracion: function () {
    const anio = this.yearNacimiento;
    let texto = ''
    // 2. Buscamos la generación que coincida con el año
    const genEncontrada = this.generaciones.find((generacion) => anio >= generacion.min && anio <= generacion.max);
    // 3. Renderizamos según el resultado
    if (genEncontrada) {
      texto = `
        <p class='text-light'>Generación: '${genEncontrada.nombre}'</p>
        <p class='text-light'>Rasgo característico: '${genEncontrada.rasgo}'</p>
      `;
    } else {
      texto = `<p>Generación no encontrada</p>`;
    }
    console.log('el texto generado es ', texto)
    return texto
  },

  mostrarDatos: function () {
    return `<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Año de nacimiento: ${this.yearNacimiento}</li>
    </ul>`
  },
  
};
console.log(persona)
  //agregar los eventos a los botones del panel
  const btnMostrarDatos = document.getElementById('btnMostrarDatos')
  const btnMostrarGeneracion = document.getElementById('btnMostrarGeneracion')
  console.log(btnMostrarGeneracion)
  btnMostrarDatos.addEventListener('click', ()=> mostrarDatosPersonas(persona))
  btnMostrarGeneracion.addEventListener('click', ()=> mostrarGeneracionPersona(persona))
  //mostrar el panel para interactuar con los metodos de persona
   const panelPersona = document.getElementById('panelPersona');
   panelPersona.classList.remove('d-none')
}

function mostrarDatosPersonas(persona){
  const panelPersona = document.getElementById('panelPersona');
  panelPersona.innerHTML += persona.mostrarDatos()
}
function mostrarGeneracionPersona(persona){
  const panelPersona = document.getElementById('panelPersona');
  console.log(panelPersona.innerHTML)
  panelPersona.innerHTML += persona.mostrarGeneracion()
}

const btnOcultar = document.querySelector(".btn-danger");
const btnEliminar = document.querySelectorAll(".btn-danger");
const formTarea = document.getElementById("formTarea");
const btnSetTimeout = document.getElementById("btnSetTimeout");
const btnReloj = document.getElementById('btnReloj')
const formPersona = document.getElementById('formPersona')

//agregar un manejador de eventos
btnOcultar.addEventListener("click", ocultarTexto);
// si la funcion tiene parametros guardarla en un callback
// btnOcultar.addEventListener('click', ()=> ocultarTexto('hola mundo'))
btnEliminar[1].addEventListener("click", eliminarParrafo);
formTarea.addEventListener("submit", crearTarea);
btnSetTimeout.addEventListener("click", activarCartel);
btnReloj.addEventListener('click', detenerReloj)
formPersona.addEventListener('submit', crearPersona)

const hora = document.getElementById('reloj')
const idInterval = setInterval( ()=>{
  const fecha = new Date()
  const segundos = (fecha.getSeconds() < 10) ? '0'+fecha.getSeconds() : fecha.getSeconds()
  hora.innerHTML = `${fecha.getHours()} : ${fecha.getMinutes()} : ${segundos}`
}, 1000)

// Como trabajar con la fecha
const hoy  = new Date()
console.log(hoy)
console.log(hoy.getFullYear())
console.log(hoy.getMonth())

const configuracionFecha = {
    weekday: "long", // 'long' (ej. "lunes"), 'short' (ej. "lun"), 'narrow' (ej. "L")
    year: "numeric", //'numeric' (ej. "2023"), '2-digit' (ej. "23")
    month: "long", // 'numeric' (ej. "1"), '2-digit' (ej. "01"), 'long' (ej. "enero"), 'short' (ej. "ene"), 'narrow' (ej. "E")
    day: "numeric", //'numeric' (ej. "3"), '2-digit' (ej. "03")
}

console.log(hoy.toLocaleDateString(undefined, configuracionFecha))

