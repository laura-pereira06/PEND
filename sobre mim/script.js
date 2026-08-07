

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



const form = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;

    resposta.innerHTML =
        `Obrigado, <strong>${nome}</strong>! Sua mensagem foi enviada com sucesso.`;

    form.reset();

});