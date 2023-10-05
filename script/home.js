import initRegister from "./register.js";

export default function initHome() {
  const mainContainer = document.querySelector("main");

  const div = document.createElement("div");
  div.classList.add("container-intro");
  div.id = "divHome";
  localStorage.registrado ? (div.style.placeSelf = "center") : "";

  const h1 = document.createElement("h1");
  h1.innerText = "Churrascômetro";

  const p = document.createElement("p");
  p.innerText = "Organize melhor o seu churrasco! O Churrascômetro foi desenvolvido com o intuito de facilitar a organização dos gastos do seu churrasco, tornando o cálculo muito mais preciso e eficiente para que você e seus convidados gastem na medida certa para um ótimo churrasco.";

  const button = document.createElement("button");
  button.innerHTML = `Calcular seu churrasco <span class="span-button">➜</span>`;
  button.id = "buttonHome";
  if (!localStorage.registrado) {
    button.disabled = "false";
    button.classList.add("dis-btn");
  } else {
    button.classList.add("ativ-btn");
  }
  const img = document.createElement("img");
  img.src = "./img/churras_init.svg";

  mainContainer.appendChild(div);

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(button);
  div.appendChild(img);

  // Puxando todas informações do registro inicial
  if (!localStorage.registrado) {
    const formRegister = initRegister();
    const btnLogin = formRegister.querySelector("#btn-login");
    const nome = formRegister.querySelector("#name-login");
    const email = formRegister.querySelector("#email-login");
    const cep = formRegister.querySelector("#cep-login");
    const termos = formRegister.querySelector("#termos");

    btnLogin.addEventListener("click", () => {
      const emailCerto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailCerto.test(email.value)) {
        if (/^\d+$/.test(cep.value) && cep.value.length == 8) {
          mainContainer.removeChild(formRegister);
          button.removeAttribute("disabled");
          button.classList.add("ativ-btn");
          button.classList.remove("dis-btn");
          div.style.placeSelf = "center";

          // enviando objeto registro para o localStorage
          const objRegister = {
            nome: nome.value,
            email: email.value,
            cep: cep.value,
            termos: termos.checked,
          };
          localStorage.setItem("registrado", JSON.stringify(objRegister));
        } else {
          errors("cep-error");
        }
      } else {
        errors("email-error");
      }

      function errors(tipo) {
        const span = document.createElement("span");
        span.classList.add("errorSpan");
        if (tipo == "cep-error") {
          span.innerHTML = "CEP inválido, deve conter apenas números.";
        }
        if (tipo == "email-error") {
          span.innerHTML = "Email inválido, verifique e tente novamente.";
        }
        formRegister.appendChild(span);
        setTimeout(() => formRegister.removeChild(span), 2500);
      }
    });
  }
}
