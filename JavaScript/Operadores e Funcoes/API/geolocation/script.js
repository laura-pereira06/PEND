navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude: ", posicao.coords.latitude); 
        console.log("Longitude: ", posicao.coords.longitude);
        console.log("Precisão: ", posicao.coords.accuracy);

        document.querySelector("#localizacaoPermitida").style.display = "block";
        document.querySelector("#localizacaoNegada").style.display = "none";
    },
    function (erro) {
        console.log("Não foi possível obter a localização. ", erro);

        document.querySelector("#localizacaoPermitida").style.display = "none";
        document.querySelector("#localizacaoNegada").style.display = "block";
    }
);