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

let ps = 42; //em kg
let alt = 1.60; // em metros
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