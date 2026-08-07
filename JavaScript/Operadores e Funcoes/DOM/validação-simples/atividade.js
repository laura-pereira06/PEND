ElementById("email");let email = document.get
let senha = document.getElementById("senha");
let validar = document.getElementById("validar");
let mensagem = document.getElementById("mensagem-senha");

validar.addEventListener("click", function () {
    if (email.value.trim() === "" || !email.value.includes("@") || !email.value.includes(".")) {
        alert("Por favor, digite um email válido.");
        return;
    }
    alert("Email válido!");
});

senha.addEventListener("keyup", function () {
    if (senha.value.length < 6) {
        senha.style.borderColor = "red";
        mensagem.textContent = "A senha é fraca.";
        mensagem.style.color = "red";
    } else if (senha.value.length >= 6 && senha.value.length < 10) {
        senha.style.borderColor = "orange";
        mensagem.textContent = "A senha é aceitável.";
        mensagem.style.color = "orange";
    } else {
        senha.style.borderColor = "green";
        mensagem.textContent = "A senha é forte.";
        mensagem.style.color = "green";
    }
});