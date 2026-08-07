 function saudacao() {
    console.log("Olá, Javascript!");
 }

 saudacao();

//
 function saudacaoComNome(nome) {
    console.log("Olá, " + nome );
    }

 saudacaoComNome("Maria");

// função sem retorno (exibir/ interragin, ideal para interface/ comunicação)
 function soma(a, b) {
    return a + b; // funcao com retorno (reutilizada em cálculos, ideal para lógica)
    }

console.log(soma(5, 3));

// Atividade 7

function imc(ps, alt) {
    return ps / (alt * alt);
}

let ps = prompt("Digite seu peso em kg:"); //em kg
let alt = prompt("Digite sua altura (m):"); // em metros
console.log("Seu IMC é: " + imc(ps, alt));

//atividade 8
function imparOuPar(num) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }   
}
let num = 7;
console.log("O número é", imparOuPar(num));

//funcoes nativas- data e hora
console.log("Funções nativas");

let agora = new Date();
console.log(agora);