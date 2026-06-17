const email = document.getElementById("email");
const senha = document.getElementById("senha");
const nome = document.getElementById("nome");
const endereco = document.getElementById("endereco");
const msgEndereco = document.getElementById("mensagem-endereco");
const msgTelefone = document.getElementById("mensagem-telefone");
const msgNome = document.getElementById("mensagem-nome");
const msgEmail = document.getElementById("mensagem-email");
const msgSenha = document.getElementById("mensagem-senha");
const msgFinal = document.getElementById("mensagem-final");

const addtelefone = document.getElementById("addtelefone");
const removerTelefone = document.getElementById("removertelefone");
const containerTelefone = document.getElementById("container-telefone");

const cadastrar = document.getElementById("cadastrar");

// ================= NOME =================
nome.addEventListener("input", function () {
    if (nome.value.trim().length >= 3) {
        msgNome.textContent = "Nome válido !";
        msgNome.style.color = "green";
        nome.classList.add("valido");
        nome.classList.remove("invalido");
    } else {
        msgNome.textContent = "Nome inválido !";
        msgNome.style.color = "red";
        nome.classList.add("invalido");
        nome.classList.remove("valido");
    }
});

// ================= EMAIL =================
email.addEventListener("input", function () {
    if (email.value.includes("@") && email.value.includes(".")) {
        msgEmail.textContent = "Email válido !";
        msgEmail.style.color = "green";
        email.classList.add("valido");
        email.classList.remove("invalido");
    } else {
        msgEmail.textContent = "Email inválido !";
        msgEmail.style.color = "red";
        email.classList.add("invalido");
        email.classList.remove("valido");
    }
});

// ================= SENHA =================
senha.addEventListener("input", function () {
    let valor = senha.value;

    if (valor.length < 6) {
        msgSenha.textContent = "Senha fraca.";
        msgSenha.style.color = "red";
    } else if (valor.length <= 10) {
        msgSenha.textContent = "Senha média.";
        msgSenha.style.color = "orange";
    } else {
        msgSenha.textContent = "Senha forte.";
        msgSenha.style.color = "green";
    }
});

// ================= ENDEREÇO =================
endereco.addEventListener("input", function () {
    if (endereco.value.trim().length >= 5) {
        msgEndereco.textContent = "Endereço válido !";
        msgEndereco.style.color = "green";
        endereco.classList.add("valido");
        endereco.classList.remove("invalido");
    } else {
        msgEndereco.textContent = "Endereço inválido !";
        msgEndereco.style.color = "red";
        endereco.classList.add("invalido");
        endereco.classList.remove("valido");
    }
});

// ================= TELEFONES =================

// valida todos os telefones
function validarTelefones() {
    let telefones = document.querySelectorAll(".telefone");
    let todosValidos = true;

    telefones.forEach(function (tel) {
        let valor = tel.value.replace(/\D/g, "");
        if (valor.length !== 11) {
            todosValidos = false;
        }
    });

    return todosValidos;
}

// valida em tempo real o primeiro telefone
document.addEventListener("input", function (e) {
    if (e.target.classList.contains("telefone")) {
        let valor = e.target.value.replace(/\D/g, "");

        if (valor.length === 11) {
            msgTelefone.textContent = "Telefone válido !";
            msgTelefone.style.color = "green";
        } else {
            msgTelefone.textContent = "Telefone inválido !";
            msgTelefone.style.color = "red";
        }
    }
});

// adicionar telefone
addtelefone.addEventListener("click", function () {
    let novoTelefone = document.createElement("input");
    novoTelefone.type = "text";
    novoTelefone.placeholder = "Digite seu telefone";
    novoTelefone.classList.add("telefone");

    containerTelefone.appendChild(novoTelefone);
});

// remover telefone
removerTelefone.addEventListener("click", function () {
    let telefones = document.querySelectorAll(".telefone");

    if (telefones.length > 1) {
        telefones[telefones.length - 1].remove();
    }
});

// ================= CADASTRO =================
cadastrar.addEventListener("click", function () {

    if (
    msgNome.textContent === "Nome válido !" &&
    msgEmail.textContent === "Email válido !" &&
    msgEndereco.textContent === "Endereço válido !" &&
    validarTelefones() &&
    msgSenha.textContent === "Senha forte."
) {
        msgFinal.textContent = "Cadastro realizado com sucesso !";
        msgFinal.style.color = "green";
    } else {
        msgFinal.textContent = "Preencha os campos corretamente !";
        msgFinal.style.color = "red";
    }

});