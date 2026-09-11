// ==========================================
// BURGER MASTER
// JOGO PROFISSIONAL DE DRAG AND DROP
// ==========================================


// ==========================================
// CONFIGURAÇÃO
// ==========================================

const ordemCorreta = [
    "pao",
    "carne",
    "queijo",
    "alface",
    "tomate"
];

const emojis = {
    pao: "🍞",
    carne: "🥩",
    queijo: "🧀",
    alface: "🥬",
    tomate: "🍅"
};

const nomes = {
    pao: "Pão",
    carne: "Carne",
    queijo: "Queijo",
    alface: "Alface",
    tomate: "Tomate"
};


// ==========================================
// ESTADO DO JOGO
// ==========================================

let proximaPosicao = 0;
let pontuacao = 0;
let vidas = 3;
let combo = 0;
let comboMaximo = 0;
let tempo = 60;
let intervaloTempo = null;
let jogoAtivo = false;


// ==========================================
// ELEMENTOS
// ==========================================

const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");

const comecar = document.getElementById("comecar");

const ingredientes =
    document.querySelectorAll(".ingrediente");

const areaDrop =
    document.getElementById("area-drop");

const contador =
    document.getElementById("contador");

const barraProgresso =
    document.getElementById("barra-progresso");

const pontuacaoElemento =
    document.getElementById("pontuacao");

const comboElemento =
    document.getElementById("combo");

const tempoElemento =
    document.getElementById("tempo");

const vidasElemento =
    document.getElementById("vidas");

const etapaAtual =
    document.getElementById("etapaAtual");

const feedback =
    document.getElementById("feedback");

const reiniciar =
    document.getElementById("reiniciar");

const resultado =
    document.getElementById("resultado");

const resultadoIcone =
    document.getElementById("resultadoIcone");

const resultadoTitulo =
    document.getElementById("resultadoTitulo");

const resultadoMensagem =
    document.getElementById("resultadoMensagem");

const pontuacaoFinal =
    document.getElementById("pontuacaoFinal");

const comboFinal =
    document.getElementById("comboFinal");

const recordeFinal =
    document.getElementById("recordeFinal");

const jogarNovamente =
    document.getElementById("jogarNovamente");

const voltarInicio =
    document.getElementById("voltarInicio");

const recordeInicial =
    document.getElementById("recordeInicial");


// ==========================================
// RECORDE
// ==========================================

let recorde =
    Number(localStorage.getItem("burgerMasterRecorde")) || 0;

recordeInicial.textContent = recorde;


// ==========================================
// COMEÇAR
// ==========================================

comecar.addEventListener("click", () => {

    inicio.classList.add("escondido");

    jogo.classList.remove("escondido");

    iniciarJogo();

});


// ==========================================
// INICIAR JOGO
// ==========================================

function iniciarJogo() {

    proximaPosicao = 0;
    pontuacao = 0;
    vidas = 3;
    combo = 0;
    comboMaximo = 0;
    tempo = 60;

    jogoAtivo = true;

    resultado.classList.add("escondido");

    limparHamburguer();

    ingredientes.forEach(ingrediente => {

        ingrediente.style.display = "flex";
        ingrediente.classList.remove("arrastando");

    });

    atualizarInterface();

    iniciarCronometro();

}


// ==========================================
// CRONÔMETRO
// ==========================================

function iniciarCronometro() {

    clearInterval(intervaloTempo);

    intervaloTempo = setInterval(() => {

        if (!jogoAtivo) return;

        tempo--;

        tempoElemento.textContent = tempo;

        if (tempo <= 10) {

            tempoElemento.style.color =
                "#e63946";

        }

        if (tempo <= 0) {

            clearInterval(intervaloTempo);

            finalizarJogo(false);

        }

    }, 1000);

}


// ==========================================
// DRAG START
// ==========================================

ingredientes.forEach(ingrediente => {

    ingrediente.addEventListener("dragstart", event => {

        if (!jogoAtivo) return;

        const id = ingrediente.dataset.id;

        event.dataTransfer.setData(
            "text/plain",
            id
        );

        event.dataTransfer.effectAllowed = "move";

        ingrediente.classList.add("arrastando");

    });


    ingrediente.addEventListener("dragend", () => {

        ingrediente.classList.remove("arrastando");

        areaDrop.classList.remove("destacado");

    });

});


// ==========================================
// DRAG OVER
// ==========================================

areaDrop.addEventListener("dragover", event => {

    if (!jogoAtivo) return;

    event.preventDefault();

    areaDrop.classList.add("destacado");

});


// ==========================================
// DRAG LEAVE
// ==========================================

areaDrop.addEventListener("dragleave", event => {

    if (!areaDrop.contains(event.relatedTarget)) {

        areaDrop.classList.remove("destacado");

    }

});


// ==========================================
// DROP
// ==========================================

areaDrop.addEventListener("drop", event => {

    event.preventDefault();

    if (!jogoAtivo) return;

    areaDrop.classList.remove("destacado");

    const idIngrediente =
        event.dataTransfer.getData("text/plain");

    const ingredienteCorreto =
        ordemCorreta[proximaPosicao];


    // ======================================
    // ACERTO
    // ======================================

    if (idIngrediente === ingredienteCorreto) {

        combo++;

        if (combo > comboMaximo) {
            comboMaximo = combo;
        }

        const pontosGanhos =
            100 + ((combo - 1) * 25);

        pontuacao += pontosGanhos;

        tempo += 3;

        colocarIngrediente(idIngrediente);

        proximaPosicao++;

        mostrarFeedback(
            `✓ ${nomes[idIngrediente]} correto! +${pontosGanhos} pontos`,
            true
        );

        atualizarInterface();


        // terminou?

        if (proximaPosicao === ordemCorreta.length) {

            setTimeout(() => {

                finalizarJogo(true);

            }, 600);

        }

    }


    // ======================================
    // ERRO
    // ======================================

    else {

        vidas--;

        combo = 0;

        mostrarFeedback(
            "✕ Ops! Esse não é o próximo ingrediente.",
            false
        );

        atualizarInterface();

        if (vidas <= 0) {

            setTimeout(() => {

                finalizarJogo(false);

            }, 500);

        }

    }

});


// ==========================================
// COLOCAR INGREDIENTE
// ==========================================

function colocarIngrediente(id) {

    const ingrediente =
        document.querySelector(
            `.ingrediente[data-id="${id}"]`
        );

    if (ingrediente) {

        ingrediente.style.display = "none";

    }


    const mensagem =
        areaDrop.querySelector(".drop-conteudo");

    if (mensagem) {

        mensagem.remove();

    }


    const novoIngrediente =
        document.createElement("div");

    novoIngrediente.classList.add(
        "ingrediente-montado"
    );

    novoIngrediente.textContent =
        emojis[id];

    novoIngrediente.title =
        nomes[id];

    areaDrop.appendChild(novoIngrediente);

}


// ==========================================
// ATUALIZAR INTERFACE
// ==========================================

function atualizarInterface() {

    contador.textContent =
        `${proximaPosicao} / ${ordemCorreta.length}`;

    const porcentagem =
        (proximaPosicao /
            ordemCorreta.length) * 100;

    barraProgresso.style.width =
        porcentagem + "%";

    pontuacaoElemento.textContent =
        pontuacao;

    comboElemento.textContent =
        combo;

    tempoElemento.textContent =
        tempo;

    etapaAtual.textContent =
        Math.min(proximaPosicao + 1, 5);

    atualizarVidas();

}


// ==========================================
// VIDAS
// ==========================================

function atualizarVidas() {

    const coracoes =
        "❤️".repeat(vidas) +
        "🖤".repeat(3 - vidas);

    vidasElemento.textContent =
        coracoes;

}


// ==========================================
// FEEDBACK
// ==========================================

function mostrarFeedback(texto, correto) {

    feedback.textContent = texto;

    feedback.className =
        correto
            ? "feedback-certo mostrar"
            : "feedback-erro mostrar";

    setTimeout(() => {

        feedback.classList.remove("mostrar");

    }, 1800);

}


// ==========================================
// FINALIZAR
// ==========================================

function finalizarJogo(vitoria) {

    if (!jogoAtivo) return;

    jogoAtivo = false;

    clearInterval(intervaloTempo);

    if (pontuacao > recorde) {

        recorde = pontuacao;

        localStorage.setItem(
            "burgerMasterRecorde",
            recorde
        );

        recordeInicial.textContent =
            recorde;

    }


    pontuacaoFinal.textContent =
        pontuacao;

    comboFinal.textContent =
        comboMaximo;

    recordeFinal.textContent =
        recorde;


    if (vitoria) {

        resultadoIcone.textContent = "🏆";

        resultadoTitulo.textContent =
            "BURGER MASTER!";

        resultadoMensagem.textContent =
            "Perfeito! Você montou o hambúrguer na ordem correta.";

    }

    else {

        resultadoIcone.textContent = "😵";

        resultadoTitulo.textContent =
            "QUASE LÁ!";

        if (tempo <= 0) {

            resultadoMensagem.textContent =
                "O tempo acabou! Tente novamente.";

        } else {

            resultadoMensagem.textContent =
                "Suas vidas acabaram. Tente outra vez!";

        }

    }

    resultado.classList.remove("escondido");

}


// ==========================================
// LIMPAR HAMBÚRGUER
// ==========================================

function limparHamburguer() {

    areaDrop.innerHTML = `

        <div class="drop-conteudo">

            <div class="icone-drop">
                🍔
            </div>

            <h3>Arraste o ingrediente aqui</h3>

            <p>
                Comece pela base do hambúrguer
            </p>

        </div>

    `;

}


// ==========================================
// REINICIAR
// ==========================================

reiniciar.addEventListener("click", () => {

    iniciarJogo();

});


// ==========================================
// JOGAR NOVAMENTE
// ==========================================

jogarNovamente.addEventListener(
    "click",
    () => {

        iniciarJogo();

    }
);


// ==========================================
// VOLTAR AO INÍCIO
// ==========================================

voltarInicio.addEventListener(
    "click",
    () => {

        clearInterval(intervaloTempo);

        jogoAtivo = false;

        resultado.classList.add("escondido");

        jogo.classList.add("escondido");

        inicio.classList.remove("escondido");

        recordeInicial.textContent =
            recorde;

    }
);