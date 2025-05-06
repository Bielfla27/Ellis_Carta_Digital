function digitarTexto(elementoId, texto, velocidade = 100) {
  const elemento = document.getElementById(elementoId);
  let index = 0;

  function digitar() {
    if (index < texto.length) {
      const char = texto.charAt(index);

      if (char === '\n') {
        elemento.innerHTML += '<br>';
      } else {
        elemento.innerHTML += char;
      }

      index++;
      setTimeout(digitar, velocidade);
    }
  }

  digitar();
}

document.addEventListener("DOMContentLoaded", () => {
  const mensagem = 
    "Oie, Elis!\n\n" +
    "Nessas duas últimas semanas, tirei um tempinho para colocar sua vida diante de Deus. Confesso que foi um pouquinho desafiador, já que ainda não te conheço tão bem (kkk), mas mesmo assim tentei descobrir um pouco mais sobre você — coloquei minhas técnicas de stalker em prática (rsrs).\n\n" +
    "Durante esse tempo, orei pela sua vida acadêmica. Vi que você está quase no final do curso, e sei o quanto essa fase pode ser cansativa, com estágios, provas e TCC. Que Deus te dê força, sabedoria e paz para concluir tudo com excelência.\n\n" +
    "Também orei pela sua vida espiritual, para que você nunca deixe de buscar a Deus, independentemente das circunstâncias. E que, assim como nos filmes da Marvel — onde os heróis enfrentam grandes batalhas, mas sempre há esperança no final —, você nunca se esqueça de que também é uma guerreira. Deus é teu refúgio e tua fortaleza. E, spoiler: com Ele, o final é sempre de vitória!\n\n" +
    "Ah, tentei fazer esse trocadilho com a Marvel porque vi que você curte (não sei se ficou muito bom, mas eu tentei, kk). Inclusive, depois a gente pode conversar sobre o fato de o Homem de Ferro ser o melhor herói da Marvel — e, obviamente, só a minha opinião importa (brincadeira, kkk).\n\n" +
    "Enfim, foi muito legal ter passado esse tempo orando por você e te 'conhecido' (aspas) um pouquinho melhor. Aliás, vi que tem uma música do Oasis nos seus destaques — parabéns pelo bom gosto musical também, viu? (kkk)\n\n" +
    "Que Deus continue abençoando sua vida de forma grandiosa!\n\n" +
    "Gabriel, seu amigo de oração.";

  digitarTexto("textoDigitado", mensagem, 50);
});

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musicaFundo");
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Autoplay funcionou
      })
      .catch((error) => {
        console.log("Autoplay bloqueado. O usuário precisa interagir.");
      });
  }
});
