function cambiarTitulo(){
    console.log('desde la funcion cambiar titulo')
    const titulo = document.getElementById('titulo-modificable')
    const titulo2= document.getElementsByTagName('h2')
    console.log(titulo)
    console.log(titulo2)
    // modificar las propieadades de los titulos
    titulo.textContent = 'Titulo nuevo'
    titulo.classList.add('text-primary')
    titulo2[2].textContent = 'modificado con la funcion cambiartitulo()'
}

const ocultarTexto = ()=>{
    console.log('desde la funcion ocultar texto')
    const parrafo = document.querySelector('#parrafo-ocultar')
    parrafo.classList.toggle('d-none')
    
}


const btnOcultar = document.querySelector('.btn-danger')
//agregar un manejador de eventos
btnOcultar.addEventListener('click', ocultarTexto)
// si la funcion tiene parametros guardarla en un callback
// btnOcultar.addEventListener('click', ()=> ocultarTexto('hola mundo'))
