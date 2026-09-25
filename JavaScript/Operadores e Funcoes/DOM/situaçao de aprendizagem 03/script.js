const API_KEY = "fca70350e6cf371278ce5a4fe3c3d33f";


const cidadeInput = document.getElementById("cidadeInput");
const btnClima = document.getElementById("btnClima");
const btnLocalizacao = document.getElementById("btnLocalizacao");

const resultadoClima = document.getElementById("resultadoClima");

const iconeClima = document.getElementById("iconeClima");
const temperatura = document.getElementById("temperatura");
const cidadeClima = document.getElementById("cidadeClima");

const iconeResultado = document.getElementById("iconeResultado");
const cidadeResultado = document.getElementById("cidadeResultado");
const temperaturaResultado = document.getElementById("temperaturaResultado");
const descricaoClima = document.getElementById("descricaoClima");
const detalhesClima = document.getElementById("detalhesClima");

const noticiaInput = document.getElementById("noticiaInput");
const btnPesquisar = document.getElementById("btnPesquisar");

const noticias = document.getElementById("noticias");
const carregando = document.getElementById("carregando");
const mensagem = document.getElementById("mensagem");
const tituloNoticias = document.getElementById("tituloNoticias");



document.addEventListener("DOMContentLoaded", () => {

    carregarNoticiasIniciais();

});




btnClima.addEventListener("click", () => {

    buscarClimaPorCidade();

});


cidadeInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        buscarClimaPorCidade();

    }

});




btnLocalizacao.addEventListener("click", () => {

    buscarClimaPorLocalizacao();

});


btnPesquisar.addEventListener("click", () => {

    pesquisarNoticias();

});


noticiaInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        pesquisarNoticias();

    }

});


async function carregarNoticiasIniciais() {

    carregando.style.display = "block";

    mensagem.textContent = "";

    noticias.innerHTML = "";

    tituloNoticias.textContent = "Últimas notícias";



    if (
        API_KEY === "" ||
        API_KEY === "COLOQUE_SUA_CHAVE_AQUI"
    ) {

        carregando.style.display = "none";

        mensagem.className = "erro";

       
        return;

    }


    try {

        const url =
            `https://gnews.io/api/v4/top-headlines` +
            `?category=general` +
            `&lang=pt` +
            `&country=br` +
            `&max=9` +
            `&apikey=${API_KEY}`;


        const resposta = await fetch(url);


        if (!resposta.ok) {

            throw new Error(
                `Erro da API de notícias: ${resposta.status}`
            );

        }


        const dados = await resposta.json();


        if (!dados.articles || dados.articles.length === 0) {

            throw new Error(
                "A API não retornou notícias."
            );

        }


        mostrarNoticias(dados.articles);


    } catch (erro) {

        console.error(erro);

        mensagem.className = "erro";

        mensagem.textContent =
            "Não foi possível carregar as notícias. " +
            "Confira sua API Key do GNews e sua conexão com a internet.";

    }


    carregando.style.display = "none";

}




async function pesquisarNoticias() {

    const termo = noticiaInput.value.trim();


    if (termo === "") {

        mensagem.className = "erro";

        mensagem.textContent =
            "Digite um assunto para pesquisar.";

        noticiaInput.focus();

        return;

    }



    carregando.style.display = "block";

    mensagem.textContent = "";

    noticias.innerHTML = "";


    tituloNoticias.textContent =
        `Resultados para: "${termo}"`;


    try {

        const url =
            `https://gnews.io/api/v4/search` +
            `?q=${encodeURIComponent(termo)}` +
            `&lang=pt` +
            `&country=br` +
            `&max=9` +
            `&apikey=${API_KEY}`;


        const resposta = await fetch(url);


        if (!resposta.ok) {

            throw new Error(
                `Erro da API: ${resposta.status}`
            );

        }


        const dados = await resposta.json();


        if (!dados.articles || dados.articles.length === 0) {

            noticias.innerHTML =
                `<div class="sem-noticias">
                    Nenhuma notícia encontrada para esse assunto.
                </div>`;

            return;

        }


        mostrarNoticias(dados.articles);


    } catch (erro) {

        console.error(erro);

        mensagem.className = "erro";

        mensagem.textContent =
            "Não foi possível realizar a pesquisa. " +
            "Verifique a API Key e tente novamente.";

    }


    carregando.style.display = "none";

}




function mostrarNoticias(listaNoticias) {

    noticias.innerHTML = "";


    listaNoticias.forEach((artigo) => {


       
        const card = document.createElement("article");

        card.className = "noticia";



        const imagem = document.createElement("img");

        imagem.src =
            artigo.image 
            "https://via.placeholder.com/600x350?text=Noticia";


        imagem.alt = artigo.title || "Imagem da notícia";


        imagem.onerror = function () {

            this.src =
                "https://via.placeholder.com/600x350?text=Noticia";

        };



        const conteudo = document.createElement("div");

        conteudo.className = "noticia-conteudo";



        const titulo = document.createElement("h3");

        titulo.textContent =
            artigo.title || "Sem título";



        const descricao = document.createElement("p");

        descricao.textContent =
            artigo.description ||
            "Não há descrição disponível.";



        const info = document.createElement("div");

        info.className = "noticia-info";


        const fonte = document.createElement("span");

        fonte.textContent =
            artigo.source?.name ||
            "Fonte não informada";



        const link = document.createElement("a");

        link.href = artigo.url;

        link.target = "_blank";

        link.rel = "noopener noreferrer";

        link.textContent =
            "Ler notícia completa →";



        info.appendChild(fonte);

        conteudo.appendChild(titulo);

        conteudo.appendChild(descricao);

        conteudo.appendChild(info);

        conteudo.appendChild(link);

        card.appendChild(imagem);

        card.appendChild(conteudo);

        noticias.appendChild(card);

    });

}


async function buscarClimaPorCidade() {

    const cidade = cidadeInput.value.trim();


    if (cidade === "") {

        descricaoClima.textContent =
            "Digite o nome de uma cidade.";

        cidadeInput.focus();

        return;

    }


    mostrarCarregandoClima();


    try {



        const urlGeocodificacao =
            `https://geocoding-api.open-meteo.com/v1/search` +
            `?name=${encodeURIComponent(cidade)}` +
            `&count=1` +
            `&language=pt` +
            `&format=json`;


        const respostaLocal =
            await fetch(urlGeocodificacao);


        if (!respostaLocal.ok) {

            throw new Error(
                "Erro ao procurar a cidade."
            );

        }


        const dadosLocal =
            await respostaLocal.json();


        if (
            !dadosLocal.results ||
            dadosLocal.results.length === 0
        ) {

            throw new Error(
                "Cidade não encontrada."
            );

        }


        const local = dadosLocal.results[0];


        const latitude = local.latitude;

        const longitude = local.longitude;

        const nomeCidade = local.name;




        await obterClima(
            latitude,
            longitude,
            nomeCidade
        );


    } catch (erro) {

        console.error(erro);

        cidadeResultado.textContent =
            "Erro";

        temperaturaResultado.textContent =
            "--°C";

        descricaoClima.textContent =
            erro.message;

        detalhesClima.textContent = "";

    }

}



function buscarClimaPorLocalizacao() {

    if (!navigator.geolocation) {

        descricaoClima.textContent =
            "Seu navegador não permite geolocalização.";

        return;

    }


    btnLocalizacao.disabled = true;

    btnLocalizacao.textContent =
        " Localizando...";


    navigator.geolocation.getCurrentPosition(

        async (posicao) => {

            const latitude =
                posicao.coords.latitude;

            const longitude =
                posicao.coords.longitude;


            try {

                await obterClima(
                    latitude,
                    longitude,
                    "Minha localização"
                );


            } catch (erro) {

                console.error(erro);

                descricaoClima.textContent =
                    "Não foi possível consultar o clima.";

            }


            btnLocalizacao.disabled = false;

            btnLocalizacao.textContent =
                "📍 Usar minha localização";

        },


        (erro) => {

            console.error(erro);

            descricaoClima.textContent =
                "Não foi possível acessar sua localização. " +
                "Permita o acesso à localização no navegador.";

            btnLocalizacao.disabled = false;

            btnLocalizacao.textContent =
                "📍 Usar minha localização";

        }

    );

}



async function obterClima(
    latitude,
    longitude,
    nomeCidade
) {

    mostrarCarregandoClima();


    const urlClima =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m` +
        `,relative_humidity_2m` +
        `,apparent_temperature` +
        `,weather_code` +
        `&timezone=auto`;


    const resposta =
        await fetch(urlClima);


    if (!resposta.ok) {

        throw new Error(
            "Erro ao consultar o clima."
        );

    }


    const dados =
        await resposta.json();


    const temperaturaAtual =
        dados.current.temperature_2m;


    const sensacao =
        dados.current.apparent_temperature;


    const umidade =
        dados.current.relative_humidity_2m;


    const codigoClima =
        dados.current.weather_code;


    const informacao =
        interpretarClima(codigoClima);


    cidadeResultado.textContent =
        nomeCidade;


    temperaturaResultado.textContent =
        `${Math.round(temperaturaAtual)}°C`;


    descricaoClima.textContent =
        `${informacao.icone} ${informacao.texto}`;


    detalhesClima.textContent =
        `Sensação: ${Math.round(sensacao)}°C | ` +
        `Umidade: ${umidade}%`;


    iconeResultado.textContent =
        informacao.icone;



    iconeClima.textContent =
        informacao.icone;


    temperatura.textContent =
        `${Math.round(temperaturaAtual)}°C`;


    cidadeClima.textContent =
        nomeCidade;

}



function interpretarClima(codigo) {

    if (codigo === 0) {

        return {
            texto: "Céu limpo",
            icone: "☀️"
        };

    }


    if (codigo === 1 || codigo === 2) {

        return {
            texto: "Parcialmente nublado",
            icone: "🌤️"
        };

    }


    if (codigo === 3) {

        return {
            texto: "Nublado",
            icone: "☁️"
        };

    }


    if (
        codigo === 45 ||
        codigo === 48
    ) {

        return {
            texto: "Neblina",
            icone: "🌫️"
        };

    }


    if (
        codigo >= 51 &&
        codigo <= 67
    ) {

        return {
            texto: "Chuva",
            icone: "🌧️"
        };

    }


    if (
        codigo >= 71 &&
        codigo <= 77
    ) {

        return {
            texto: "Neve",
            icone: "❄️"
        };

    }


    if (
        codigo >= 80 &&
        codigo <= 82
    ) {

        return {
            texto: "Chuva forte",
            icone: "🌦️"
        };

    }


    if (
        codigo >= 95
    ) {

        return {
            texto: "Tempestade",
            icone: "⛈️"
        };

    }


    return {
        texto: "Condição climática desconhecida",
        icone: "🌤️"
    };

}


function mostrarCarregandoClima() {

    cidadeResultado.textContent =
        "Consultando...";

    temperaturaResultado.textContent =
        "--°C";

    descricaoClima.textContent =
        "Buscando informações do clima...";

    detalhesClima.textContent = "";

}