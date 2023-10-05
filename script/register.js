export default function initRegister() {
  const mainContainer = document.querySelector("main");

  const formLogin = document.createElement("form");
  formLogin.classList.add("form-login");

  const h3Title = document.createElement("h3");
  h3Title.classList.add("h3-login");
  h3Title.innerText = "Faça seu registro:";

  const divNome = document.createElement("div");
  divNome.innerHTML = `<label for="name">Nome:</label>
  <input name="name" id="name-login" type="text" autocomplete="off" placeholder="Nome Completo">`;

  const divEmail = document.createElement("div");
  divEmail.innerHTML = `<label for="email">Email:</label>
  <input name="email" id="email-login" type="email" autocomplete="off" placeholder="exemplo@gmail.com">`;

  const divCEP = document.createElement("div");
  divCEP.innerHTML = `<label for="cep">CEP:</label>
  <input name="cep" id="cep-login" type="number" autocomplete="off" placeholder="Apenas números">`;

  const enviarBTN = document.createElement("input");
  enviarBTN.id = "btn-login";
  enviarBTN.type = "button";
  enviarBTN.value = "Enviar";

  const divTermos = document.createElement("div");
  divTermos.classList.add("termos-login");
  divTermos.innerHTML = `<input type="checkbox" name="termos" id="termos">
  <label for="termos">Eu aceito receber as melhores promoções da minha região</label>`;
  const termosInput = divTermos.querySelector("#termos");
  termosInput.checked = true;

  mainContainer.prepend(formLogin);
  formLogin.appendChild(h3Title);
  formLogin.appendChild(divNome);
  formLogin.appendChild(divEmail);
  formLogin.appendChild(divCEP);
  formLogin.appendChild(enviarBTN);
  formLogin.appendChild(divTermos);

  return formLogin;
}
