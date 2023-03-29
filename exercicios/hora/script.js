function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'manha.jpg'
    document.body.style.background = '#f7f4f4'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    img.src = 'tarde.jpg'
    document.body.style.background = '#ffc400'
} else {
    // BOA NOITE
    img.src = 'noite.jpg'
    document.body.style.background = 'black'
}
}