function cargar_elemento() {
    var container = document.getElementById('container')
    var opcion = document.getElementById('opcion')
    h1.appendChild(opcion)
    container.appendChild(h1)
}

function eliminar_elemento() {
    var container = document.getElementById('container')
    container.removeChild( container.lastElementChild )
}