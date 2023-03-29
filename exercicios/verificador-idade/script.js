function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO')
    } else {
        var fsex = document. getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'images/crianca-homem.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'images/jovem-homem.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'images/adulto-homem.jpg')
        } else {
            img.setAttribute('src', 'images/idoso-homem.jpg')
        }


    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <10) {
            img.setAttribute('src', 'images/crianca-mulher.jpg')
            } else if (idade >=10 && idade <21) {
            img.setAttribute('src', 'images/jovem-mulher.jpg')
            } else if (idade <50) {
            img.setAttribute('src', 'images/adulto-mulher.jpg')
            } else {
            img.setAttribute('src', 'images/idoso-mulher.jpg')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }
}