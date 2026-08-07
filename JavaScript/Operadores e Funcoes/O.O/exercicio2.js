class Aluno {

     //
     constructor(nome,idade,curso,matrícula) {
       //atributo
       this.nome = nome;
       this.idade = idade;
       this.curso = curso;
       this.matrícula = matrícula;
    }
    //
    aprender() {
        console.log("Aprendendo");
    }
    //
    estudar() {
        console.log("Estudando");
    }

    apresentar() {
        console.log(`${this.nome} apresentando.`);
    }
}

//
const aluno1 = new Aluno("Laura", "17", "DS", "1778");
console.log("Aluno 1: ", aluno1);

//
const aluno2 = new Aluno("Miguel", "13", "Logistica", "2556");
console.log("Aluno 2:", aluno2);

//
const aluno3 = new Aluno("Kimberlly", "14", "Qualidade", "7748");
console.log("Aluno 3:", aluno3);

console.log("-------------------------");
console.log("Atributos do Aluno 1: ");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matrícula);
console.log("-------------------------");

//
aluno1.aprender();
//
aluno1.estudar();



console.log("-------------------------");
console.log("Atributos do Aluno 2: ");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matrícula);
console.log("-------------------------");

//
aluno2.aprender();
//
aluno2.apresentar();

console.log("-------------------------");
console.log("Atributos do Aluno 3: ");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matrícula);
console.log("-------------------------");

//
aluno3.apresentar();
//
aluno3.estudar();
