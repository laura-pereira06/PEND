const nome = document.querySelector("#nome");
const botaoSalvar = document.querySelector("#botaoSalvar");
const botaoRecuperar = document.querySelector("#botaoRecuperar");
const botaoRemover = document.querySelector("#botaoRemover");
const resultado = document.querySelector("#resultado");

//SALVAR
botaoSalvar.addEventListener("click", function () {
    localStorage.setItem("nome", nome.value);
    resultado.textContent = "Nome salvo com sucesso!";
});

//RECUPERAR
botaoRecuperar.addEventListener("click", function () {
    const nomeSRecuperado = localStorage.getItem("nome");
    resultado.textContent = `Nome armazenado/recuperado: ${nomeSRecuperado}`;
});

//REMOVER
botaoRemover.addEventListener("click", function () {
    localStorage.removeItem("nome");
    resultado.textContent = "Nome removido.";
});