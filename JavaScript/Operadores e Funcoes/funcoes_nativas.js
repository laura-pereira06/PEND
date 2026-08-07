//funcoes nativas- data e hora
console.log("Funções nativas");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();
    console.log("Dia atual",data.getDate());
    console.log("Mês: ",data.getMonth() + 1);
    console.log("Ano: ",data.getFullYear());
    console.log("Horas: ",data.getHours());
    console.log("Minutos: ",data.getMinutes());
    console.log("Desafio",data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()); 
}

mostrarDataHora();
console.log("Funções nativas - Math");
console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz", Math.sqrt(numero));
    console.log("Número inteiro mais próximo", Math.round(numero));
    console.log("Arredonda para cima", Math.ceil(numero));
    console.log("Arredonda para baixo", Math.floor(numero));
    console.log("Valor absoluto", Math.abs(numero));
    console.log("Potência", Math.pow(numero, 2));
}

calcularOperacoes(7.8);

//funcoes nativas- string
console.log("Funções nativas - String");

function analisarTexto(texto) {
    console.log("Tamanho do texto", texto.length);
    console.log("Maiúsculas", texto.toUpperCase());
    console.log("Minúsculas", texto.toLowerCase());
    
}

analisarTexto("JavaScript");

function verificaTexto(frase) {
    console.log(frase.includes("JavaScript"));
}

verificaTexto("Eu amo JavaScript!");

function concatena(nome, curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}

console.log(concatena("José", "Front-end"));

