class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }

    exibir() {
        let precoFinal = this.aplicarDesconto();

        return `
            <h2>${this.nome}</h2>
            <p>Preço: R$ ${precoFinal.toFixed(2)}</p>
            <p>Categoria: ${this.categoria}</p>
            <p>Desconto: ${this.desconto}%</p>
            <hr>
        `;
    }
}

let produtos = [];

document.getElementById("botaoCadastrar").addEventListener("click", function() {

    let nome = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let categoria = document.getElementById("categoria").value;
    let desconto = parseFloat(document.getElementById("desconto").value);

    let produto = new Produto(nome, preco, categoria, desconto);

    produtos.push(produto);

    let resultado = "";

    for (let produto of produtos) {
        resultado += produto.exibir();
    }

    document.getElementById("resultado").innerHTML = resultado;

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("desconto").value = "";
});