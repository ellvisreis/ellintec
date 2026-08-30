/* Site ELLINTEC - interacoes minimas, sem dependencia externa. */
(function () {
  "use strict";

  // menu do celular
  var botao = document.getElementById("abre");
  var nav = document.getElementById("nav");
  if (botao && nav) {
    botao.addEventListener("click", function () {
      var aberto = nav.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });
    nav.addEventListener("click", function (ev) {
      if (ev.target.tagName === "A") {
        nav.classList.remove("aberto");
        botao.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ano do rodape, para nao envelhecer sozinho
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
