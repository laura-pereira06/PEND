class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;

    }

    estudar () {
        console.log(`${this.nome} está estudando...`);

    }

    apresentar () {
        console.log(`${this.nome} está apresentando...`);
    }

    
    
}

class Turma {

    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

     exibirNaTela () {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = '';

        this.alunos.forEach(aluno => {

        resultado.innerHTML += `    

           <div>
                <p> ${aluno.nome}</p>
                <p>Idade: ${aluno.idade}</p>
                <p>Curso: ${aluno.curso}</p>
                <p>Matricula: ${aluno.matricula}</p>
           </div>
            `;
        });

    }
}
const turma = new Turma();
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click" , function() {

    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);

    // alunos.push(aluno);
    // console.log(alunos);
    // aluno.exibirNaTela();

    turma.adicionarAluno(aluno);
    turma.exibirNaTela();

   
});

