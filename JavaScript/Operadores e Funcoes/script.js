console.log("Olá, JavaScript !");

let a = 10;
let b = 3;

console.log("Adição", a + b); 
console.log("Subtração", a - b); 
console.log("Multiplicação", a * b); 
console.log("Divisão", a / b); 
console.log("Resto", a % b);
console.log("Exponenciação", a ** b);

let contador = 5;
contador++;
console.log(contador);

let m = 10;
let n = 15;
let o = 20;

console.log((m + n + o)/3);

let p = 7;
let q = 2;

console.log("Operador de resto", p % q);

let x = 10;
let y = "10";

console.log("Igualdade (==):", x == y);
console.log("Idêntico (===):", x === y);
console.log("Desigualdade (!=):", x != y);
console.log("Desigualdade estrita (!==):", x !== y); 

// Atividade 3
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {        
    console.log("Você é menor de idade.");
}

// Atividade 4
let n1 = 20;
let n2 = 16;

if (n1 > n2) {
    console.log("Você é maior de idade:", n1);
} else if (n1 > n2) {
    console.log("Você é menor de idade:", n2);
}

// operadores lógicos
let idadeUsuario = 25;
let temCarteira = true;

console.log(idadeUsuario >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);   

let ligado = false;
console.log(!ligado); // true
//atividade 5
let nota1 = 8;
let frequencia = 60;
if (nota1 >= 8 && frequencia >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//atividade 6
let login = false;
let token  = true;
if (login || token) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}
