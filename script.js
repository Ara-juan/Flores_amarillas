const envelope = document.querySelector(".envelope");
const button = document.getElementById("goToFlowers");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    // Mostrar botón después de abrir
    setTimeout(() => {
      button.classList.add("show");
    }, 1000);

    // Lanzar lluvia de corazones
    rainHearts(2000); // 2 segundos
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "index1.html";
});

// 🌸 Función para lluvia de corazones
function rainHearts(duration) {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    // posición aleatoria
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    // eliminar después de caer
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 200);

  // detener después de "duration"
  setTimeout(() => clearInterval(interval), duration);
}

function toggleEnvelope() {
  envelope.classList.toggle("open");
  if (music.paused) {
    music.play().catch(err => {
      console.log("El navegador bloqueó el autoplay hasta interacción:", err);
    });
  }
}

// Escucha tanto click como toque
envelope.addEventListener("click", toggleEnvelope);
envelope.addEventListener("touchstart", toggleEnvelope);