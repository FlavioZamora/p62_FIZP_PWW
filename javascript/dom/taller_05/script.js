function seleccionar_opcion( opcion ) {
    var opcion1 = document.getElementById('opcion1')
    var opcion2 = document.getElementById('opcion2')

    if (opcion == 1) {
        opcion1.style.zIndex = 2
        opcion2.style.zIndex = 1
    } else if (opcion == 2) {
        opcion1.style.zIndex = 1
        opcion2.style.zIndex = 2
    }
}