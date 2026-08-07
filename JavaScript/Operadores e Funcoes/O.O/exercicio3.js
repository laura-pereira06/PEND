class Produto {

     //
     constructor(nome,preço,estoque) {
       //atributo
       this.nome = nome;
       this.preço = preço;
       this.estoque = estoque;

    }
    //
    vender() {
        console.log(`${this.nome} está sendo vendido.`);
    }
    //
    repor() {
        console.log(`${this.nome} está sendo reposto.` );
    }

    alterarPreco() {
        console.log(`O preço do ${this.nome} está alterado .`);
    }
}

//
const produto1 = new Produto("Detergente", "10,00", "27");
console.log("Produto 1: ", produto1);

//
const produto2 = new Produto("Miojo", "9,00", "40");
console.log("Produto 2:", produto2);

//
const produto3 = new Produto("Sal", "5,00", "38");
console.log("Produto 3: ", produto3);


console.log("-------------------------");
console.log("Atributos do Produto 1: ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preço);
console.log("- ", produto1.estoque);
console.log("-------------------------");

//
produto1.alterarPreco();
//
produto1.repor();



console.log("-------------------------");
console.log("Atributos do Produto 1: ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preço);
console.log("- ", produto1.estoque);
console.log("-------------------------");

//
produto2.vender();
//
produto2.repor();
;

console.log("-------------------------");
console.log("Atributos do Produto 1: ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preço);
console.log("- ", produto1.estoque);
console.log("-------------------------");

//
produto3.vender();
//
produto3.alterarPreco();
