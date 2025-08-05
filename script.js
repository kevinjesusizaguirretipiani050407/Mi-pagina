document.addEventListener("click", function(event) {
  // Crear un nuevo elemento con la frase
  const frase = document.createElement("div");
  frase.textContent = "Te Amo ❤️";
  frase.className = "frase";

  // Posicionar la frase donde se hizo clic
  frase.style.left = event.clientX + "px";
  frase.style.top = event.clientY + "px";

  // Agregar al body
  document.body.appendChild(frase);

  // Eliminar después de la animación
  setTimeout(() => frase.remove(), 1200);
});
