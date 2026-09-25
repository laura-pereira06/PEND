const botao = document.getElementById('buscarGatos');

const resultado = document.getElementById('resultado');

const quantidadeGatos = document.getElementById('quantidadeGatos');

// COM CAMPO DE BUSCA
botao.addEventListener('click', async () => {

    const quantidade = Number(quantidadeGatos.value);

    if (!quantidade || quantidade <= 0) {
        resultado.innerHTML = 'Insira uma quantidade válida de gatos.';
        return;
    }

    try {

        resultado.innerHTML = 'Buscando gatos...';

        let gatos = [];

        for (let i = 0; i < quantidade; i += 10) {

            const limite = Math.min(10, quantidade - i);

            const resposta = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=${limite}`
            );

            const dados = await resposta.json();

            gatos = gatos.concat(dados);
        }

        resultado.innerHTML = '';

        gatos.forEach((gato, index) => {

            resultado.innerHTML += `
                <p>
                    <strong>Gato ${index + 1}</strong><br>
                    <img src="${gato.url}" width="300">
                </p>
                <hr>
            `;

        });

    } catch (erro) {

        resultado.innerHTML = 'Erro ao buscar os gatos.';
        console.log(erro);

    }
});