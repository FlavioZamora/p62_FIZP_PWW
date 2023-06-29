var div_cajita = document.getElementById('cajita')
var es_presionado = false

div_cajita.addEventListener('mousedown', function(valor){
    es_presionado = true

    console.log(es_presionado)
}, true)

div_cajita.addEventListener('mouseup', function(valor){
    es_presionado = false

    console.log(es_presionado)
}, true)

div_cajita.addEventListener('mousemove', function(valor){
    console.log('[mousemove]')
}, true)