

navigator.geolocation.getCurrentPosition(

    function (posicao) {

        const latitude = posicao.coords.latitude;
        const longitude = posicao.coords.longitude;
        const precisao = posicao.coords.accuracy;

        // Mostra os dados na página
        document.querySelector("#latitude").textContent =
            latitude.toFixed(6);

        document.querySelector("#longitude").textContent =
            longitude.toFixed(6);

        document.querySelector("#precisao").textContent =
            precisao.toFixed(2) + " metros";

        document.querySelector("#statusLocalizacao").textContent =
            "✅ Localização obtida com sucesso!";

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        console.log("Precisão:", precisao);
    },

    function (erro) {

        console.log("Erro ao obter localização:", erro);

        document.querySelector("#latitude").textContent =
            "Não disponível";

        document.querySelector("#longitude").textContent =
            "Não disponível";

        document.querySelector("#precisao").textContent =
            "Não disponível";

        document.querySelector("#statusLocalizacao").textContent =
            "❌ Não foi possível obter sua localização.";
    }

);




navigator.mediaDevices.getUserMedia({

    video: true

})

.then(function (stream) {

    const video = document.querySelector("#camera");

    video.srcObject = stream;

    document.querySelector("#statusCamera").textContent =
        "✅ Câmera ativada com sucesso!";

})

.catch(function (erro) {

    console.log("Erro ao acessar a câmera:", erro);

    document.querySelector("#statusCamera").textContent =
        "❌ Não foi possível acessar a câmera.";

});




document.querySelector("#btnFoto").addEventListener(
    "click",
    function () {

        const video = document.querySelector("#camera");
        const canvas = document.querySelector("#foto");
        const fotoCapturada = document.querySelector("#fotoCapturada");

        // Define o tamanho da foto igual ao tamanho do vídeo
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Pega o contexto do canvas
        const contexto = canvas.getContext("2d");

        // Desenha o vídeo no canvas
        contexto.drawImage(
            video,
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Transforma o canvas em imagem
        const imagem = canvas.toDataURL("image/png");

        // Mostra a foto capturada
        fotoCapturada.src = imagem;

        // Mostra a imagem
        fotoCapturada.style.display = "block";

        console.log("📸 Foto capturada com sucesso!");
    }
);





document.querySelector("#btnRegistrar").addEventListener(
    "click",
    function () {

        const latitude =
            document.querySelector("#latitude").textContent;

        const longitude =
            document.querySelector("#longitude").textContent;

        const precisao =
            document.querySelector("#precisao").textContent;

        const fotoCapturada =
            document.querySelector("#fotoCapturada");

        const resultado =
            document.querySelector("#resultado");

        resultado.style.display = "block";

        resultado.innerHTML = `
            <h3>✅ Visita registrada!</h3>

            <p>
                <strong>Data:</strong>
                ${new Date().toLocaleString("pt-BR")}
            </p>

            <p>
                <strong>Latitude:</strong>
                ${latitude}
            </p>

            <p>
                <strong>Longitude:</strong>
                ${longitude}
            </p>

            <p>
                <strong>Precisão:</strong>
                ${precisao}
            </p>
        `;

        if (fotoCapturada.src) {

            resultado.innerHTML += `
                <p><strong>Foto da visita:</strong></p>

                <img 
                    src="${fotoCapturada.src}" 
                    alt="Foto da visita"
                    class="fotoRegistro"
                >
            `;
        }

    }
);
