function mostrarDataHora() {
    let data = new Date();
    console.log("Horas",data.getHours() + ":" + data.getMinutes());
}

mostrarDataHora();

function calcularOperacoes(n1, n2) {
    console.log("Soma: ", n1 + n2);
    console.log("Media: ", (n1 + n2) / 2);
}
let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");
calcularOperacoes(Number(n1), Number(n2));

function analisarTexto(texto) {
    console.log("Tamanho do texto", texto.length);
    console.log("Maiúsculas", texto.toUpperCase());
}

let Nome = prompt("Digite seu nome:");
analisarTexto(Nome);


function verificaTexto(frase) {
    console.log(frase.includes("HTML"));
}

let texto = prompt("Digite uma frase:");
verificaTexto(texto);