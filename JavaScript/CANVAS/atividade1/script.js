const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");
contexto.lineWidth = 10;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// CABEÇA
contexto.beginPath();
contexto.arc(255, 120, 40, 0, Math.PI * 2);
contexto.stroke();


// CORPO
contexto.beginPath();
contexto.moveTo(250, 160);
contexto.lineTo(255, 300);
contexto.stroke();


// BRAÇO ESQUERDA
contexto.beginPath();
contexto.moveTo(250, 170);
contexto.lineTo(200, 210);
contexto.lineTo(280, 220);
contexto.stroke();


// BRAÇO DIREITA
contexto.beginPath();
contexto.moveTo(250, 170);
contexto.lineTo(300, 210);
contexto.lineTo(340, 160);
contexto.stroke();


// PERNA ESQUERDA
contexto.beginPath();
contexto.moveTo(255, 300);
contexto.lineTo(195, 350);
contexto.lineTo(195, 450);
contexto.stroke();


// PERNA DIREITA
contexto.beginPath();
contexto.moveTo(255, 300);
contexto.lineTo(320, 350);
contexto.lineTo(320, 450);
contexto.stroke();