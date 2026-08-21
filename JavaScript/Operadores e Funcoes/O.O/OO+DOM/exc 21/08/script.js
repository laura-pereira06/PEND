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

    exibir(index) {
        let precoFinal = this.aplicarDesconto();

        return `
            <div>
                <h2>${this.nome}</h2>

                <p>Preço: R$ ${precoFinal.toFixed(2)}</p>

                <p>Categoria: ${this.categoria}</p>

                <p>Desconto: ${this.desconto}%</p>

                <button onclick="excluirProduto(${index})">
                    Excluir
                </button>

                <hr>
            </div>
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

    exibirProdutos();

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("desconto").value = "";
});


function exibirProdutos() {

    let resultado = "";

    for (let i = 0; i < produtos.length; i++) {
        resultado += produtos[i].exibir(i);
    }

    document.getElementById("resultado").innerHTML = resultado;
}


function excluirProduto(index) {

    produtos.splice(index, 1);

    exibirProdutos();
}