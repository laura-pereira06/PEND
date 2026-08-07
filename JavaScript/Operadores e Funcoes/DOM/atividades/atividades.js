//atividade 1
let titulo = document.getElementById("titulo");
let vermelho = document.getElementById("vermelho");
let azul = document.getElementById("azul");

vermelho.addEventListener("click", function () {
    titulo.style.color = "red";

});

azul.addEventListener("click", function () {
    titulo.style.color = "blue";
});

//atividade 2
let mostrar = document.getElementById("mostrar");
let paragrafo = document.getElementById("paragrafo");

mostrar.addEventListener("click", function () {
    paragrafo.classList.toggle("oculto");
});

//atividade 3
let input = document.querySelector("#entrada");
let contador = document.getElementById("contador");

input.addEventListener("input", function () {
    let texto = input.value;
    contador.textContent = `Número de caracteres: ${texto.length}`;
});

//atividade 4
let contador2 = document.getElementById("contador2");
let clicar = document.getElementById("clicar");
let input2 = document.getElementById("input");
let contagem = 0;
clicar.addEventListener("click", function () {
    contagem++;
    contador2.textContent = `Número de cliques: ${contagem}`;
    input2.value = contagem;
});

//atividade 5 e 6
let adicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");
let novoItem = document.getElementById("novoItem");

adicionar.addEventListener("click", function () {
    if (novoItem.value.trim() === "") {
        alert("Por favor, digite um item.");
        return;
    }
    let item = document.createElement("li");
    item.textContent = novoItem.value;
    lista.appendChild(item);
    novoItem.value = "";
    item.addEventListener("click", function () {
        if (confirm("Você tem certeza que deseja excluir?")) {
            lista.removeChild(item);
        }


    });

});


//atividade hard
let validar = document.getElementById("validar");
let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

validar.addEventListener("click", function () {
    if (nome.value.trim() === "") {
        resultado.textContent = "Por favor, digite um nome.";
        resultado.style.color = "red";
        resultado.addEventListener("click", function () {
        });

    }else{
        resultado.textContent = 'Nome enviado com sucesso!';
        resultado.style.color = "green";
        resultado.addEventListener("click", function () {            resultado.textContent = "";
        }); 
    }           
});