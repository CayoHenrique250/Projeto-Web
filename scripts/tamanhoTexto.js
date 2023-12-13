document.getElementById("diminuirTexto").addEventListener("click", function () {
    diminuirTamanhoTexto();
});

document.getElementById("aumentarTexto").addEventListener("click", function () {
    aumentarTamanhoTexto();
});

function diminuirTamanhoTexto() {

    var tamanhoAtual = window.getComputedStyle(document.body, null).getPropertyValue("font-size");
    var novoTamanho = parseFloat(tamanhoAtual) * 0.8;
    document.body.style.fontSize = novoTamanho + "px";
}

function aumentarTamanhoTexto() {

    var tamanhoAtual = window.getComputedStyle(document.body, null).getPropertyValue("font-size");
    var novoTamanho = parseFloat(tamanhoAtual) * 1.2;
    document.body.style.fontSize = novoTamanho + "px";
}