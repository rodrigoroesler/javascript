function contar() {
    var ini = window.document.getElementById('txi')
    var fim = window.document.getElementById('txf')
    var passo = window.document.getElementById('txp')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO - FALTA DADOS')
    } else {
        res.innerHTML = '<p>Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (var contador = i; contador <= f; contador += p) {
            res.innerHTML += `${contador}  `
        }
    }
}