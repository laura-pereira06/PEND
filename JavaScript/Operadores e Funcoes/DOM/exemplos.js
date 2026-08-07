document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (código HTML = innerHTML).</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML. (textcontent)";

document.getElementById("foto").setAttribute("src", "https://wallpapers.com/images/hd/grayscale-ellie-williams-the-last-of-us-4k-f18cps920psi1m5p.jpg")

let url = document.getElementById("link").getAttribute("href");
console.log(url); "https://exemple.com"

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");

document.getElementById("alerta").classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este elemnto foi criado pelo JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);