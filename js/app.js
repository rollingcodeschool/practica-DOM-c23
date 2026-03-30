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