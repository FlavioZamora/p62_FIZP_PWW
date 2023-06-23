function cargar_elemento() {
    var container = document.getElementById('container')
    var mensaje = document.getElementById('mensaje')
    var h1 = document.createElement('h1')
    var texto = document.createTextNode( mensaje.value )
    h1.appendChild(texto)
    container.appendChild(h1)
}

function eliminar_elemento() {
    var container = document.getElementById('container')
    container.removeChild( container.lastElementChild )
}