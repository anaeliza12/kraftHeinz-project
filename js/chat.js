const simButton = document.querySelector(".form-control[value='Sim']");
const naoButton = document.querySelector(".form-control[value='Não']");
const chatHumanTextSim = document.querySelector(".chat-human-text[hidden]");
const chatHumanTextNao = document.querySelector(".chat-human-text[hidden]:last-child");
const chatBotImg2 = document.querySelector(".chat-img-2[hidden]");

simButton.addEventListener("click", () => {
  chatHumanTextSim.removeAttribute("hidden");

  setTimeout(() => {
    chatBotImg2.removeAttribute("hidden");
  }, 1000);
});

naoButton.addEventListener("click", () => {
  // Mostra a resposta do bate-papo "Não".
  chatHumanTextNao.removeAttribute("hidden");

  // Espera 2 segundos e mostra a resposta do bate-papo do bot.
  setTimeout(() => {
    chatBotImg2.removeAttribute("hidden");
  }, 1000);
});

// Adiciona o evento de clique ao botão "Não" após o elemento `chatHumanTextNao` ser carregado.
chatHumanTextNao.addEventListener("load", () => {
  naoButton.addEventListener("click", () => {
    // Mostra a resposta do bate-papo "Não".
    chatHumanTextNao.removeAttribute("hidden");

    // Espera 2 segundos e mostra a resposta do bate-papo do bot.
    setTimeout(() => {
      chatBotImg2.removeAttribute("hidden");
    }, 1000);
  });
});