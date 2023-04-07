function inserir(num) {
document.querySelector('.tela').innerHTML += num;
}

// Apagar
function limpar() {
    document.querySelector('.tela').innerHTML = "";
}

// Voltar
function voltar() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length -1);
}

//Somar
function somar() {
    let tela = document.querySelector('.tela').innerHTML;
    if (tela) {
        document.querySelector('.tela').innerHTML = eval(tela);
    } else {
        document.querySelector('.tela').innerHTML = "N/A"
    }
}