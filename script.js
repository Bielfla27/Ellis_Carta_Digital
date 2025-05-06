function digitarTexto(elementoId, texto, velocidade = 100) {
    const elemento = document.getElementById(elementoId);
    let index = 0;
  
    function digitar() {
      if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, velocidade);
      }
    }
  
    digitar();
  }
  
  // Exemplo de uso:
  document.addEventListener("DOMContentLoaded", () => {
    digitarTexto("textoDigitado", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 50); // 80ms por letra
  });
  

  window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("musicaFundo");
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Música começou
        })
        .catch((error) => {
          // Autoplay bloqueado, opcional: mostrar botão para tocar manualmente
          console.log("Autoplay bloqueado. O usuário precisa interagir.");
        });
    }
  });