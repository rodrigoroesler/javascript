function oi() {
    var inicio = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var resultado = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('... ERRO 404 ...')
    } else {
        resultado.innerHTML = `<p>... CONTANDO ...`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (var c = i; c <= f; c += p) {
            resultado.innerHTML += `${c}  `
        }
    } 
}