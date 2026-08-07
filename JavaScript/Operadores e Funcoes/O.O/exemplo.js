//classe
class Carro {

     //
     constructor(marca,modelo,ano,cor) {
       //atributo
       this.marca = marca;
       this.modelo = modelo;
       this.ano = ano;
       this.cor = cor;
    }
    //
    Ligar() {
        console.log("Carro ligado");
    }
    //
    acelerar() {
        console.log("Acelerando");
    }

    frear() {
        console.log(`${this.modelo} freiou.`);
    }
}

//
const carro1 = new Carro("Volkswagem", "Gol", 2022, "Braco");
console.log("Carro 1: ", carro1);

//
const carro2 = new Carro("Toyta", "Corolla", 2025, "Preto");
console.log("Carro 2:", carro2);

//
const carro3 = new Carro("Fiat", "Uno", 2009, "Roxo");
console.log("Carro 3:", carro3);

console.log("-------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("-------------------------");


console.log("-------------------------");
console.log("Atributos do Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("-------------------------");

console.log("-------------------------");
console.log("Atributos do Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("-------------------------");

//
carro1.Ligar();
//
carro1.acelerar();
//
carro1.frear();