export default function initCalc() {
  const mainContainer = document.querySelector("main");

  const div = document.createElement("div");
  div.classList.add("container-calc");
  div.id = "divCalc";

  const h1 = document.createElement("h1");
  h1.innerText = "Churrascômetro";

  const formPessoas = document.createElement("form");
  formPessoas.classList.add("formPessoas");
  formPessoas.innerHTML = `<h3>Quem vai e quem bebe?</h3>
  <div class="divPessoas" id="adultos">
  <label for="adultos">Adultos:</label>
  <button type="button" id="removePessoa"> – </button>
  <span id="numAdultos">0</span>
  <button type="button" id="addPessoa"> + </button>
</div>
<div class="divPessoas" id="criancas">
  <label for="criancas">Crianças:</label>
  <button type="button" id="removePessoa"> – </button>
  <span id="numCriancas">0</span>
  <button type="button" id="addPessoa"> + </button>
  </div>
  <div class="divPessoas" id="vaoBeber">
  <label for="beber">Bebem: <br> (álcool)</label>
  <button type="button" id="removePessoa"> – </button>
  <span id="numBeber">0</span>
  <button type="button" id="addPessoa"> + </button>
</div>
  <div class="divPessoas" id="veganos">
  <label for="vegan">Veganos:</label>
  <button type="button" id="removePessoa"> – </button>
  <span id="numVegans">0</span>
  <button type="button" id="addPessoa"> + </button>
  </div>`;

  const formAlimentos = document.createElement("form");
  formAlimentos.classList.add("formAlimentos");
  formAlimentos.innerHTML = `<h3>O que vai ter no churrasco?</h3>
  <ul class="lista-itens" id="lista-carnes">
    <h4>Carnes:</h4>
    <li><input type="checkbox" name="picanha" id="picanha"><label for="picanha">Picanha</label></li>
    <li><input type="checkbox" name="cupim" id="cupim"><label for="cupim">Cupim</label></li>
    <li><input type="checkbox" name="maminha" id="maminha"><label for="maminha">Maminha</label></li>
    <li><input type="checkbox" name="fraldinha" id="fraldinha"><label for="fraldinha">Fraldinha</label></li>
    <li><input type="checkbox" name="contra-file" id="contra-file"><label for="contra-file">Contra Filé</label></li>
    <li><input type="checkbox" name="frango" id="frango"><label for="frango">Frango</label></li>
    <li><input type="checkbox" name="alcatra" id="alcatra"><label for="alcatra">Alcatra</label></li>
    <li><input type="checkbox" name="linguica" id="linguica"><label for="linguica">Linguiça</label></li>
    <li><input type="checkbox" name="sobrecoxa" id="sobrecoxa"><label for="sobrecoxa">Sobrecoxa</label></li>
    <li><input type="checkbox" name="bisteca" id="bisteca"><label for="bisteca">Bisteca</label></li>
    <li><input type="checkbox" name="costela" id="costela"><label for="costela">Costela</label></li>
    <li><input type="checkbox" name="pernil" id="pernil"><label for="pernil">Pernil</label></li>
    <li><input type="checkbox" name="anchova" id="anchova"><label for="anchova">Anchova</label></li>
    <li><input type="checkbox" name="coracao" id="coracao"><label for="coracao">Coração</label></li>
  </ul>
  <ul class="lista-itens" id="lista-bebidas">
    <h4>Bebidas:</h4>
    <li><input type="checkbox" name="cerveja" id="cerveja"><label for="cerveja">Cerveja</label></li>
    <li><input type="checkbox" name="refrigerante" id="refrigerante"><label for="refrigerante">Refrigerante</label></li>
    <li><input type="checkbox" name="whisky" id="whisky"><label for="whisky">Whisky</label></li>
    <li><input type="checkbox" name="agua" id="agua"><label for="agua">Água</label></li>
    <li><input type="checkbox" name="vodka" id="vodka"><label for="vodka">Vodka</label></li>
    <li><input type="checkbox" name="suco" id="suco"><label for="suco">Suco</label></li>
    <li><input type="checkbox" name="gin" id="gin"><label for="gin">Gin</label></li>
    <li><input type="checkbox" name="cha" id="cha"><label for="cha">Chá</label></li>
    <li><input type="checkbox" name="vinho" id="vinho"><label for="vinho">Vinho</label></li>
    <li><input type="checkbox" name="energetico" id="energetico"><label for="energetico">Energético</label></li>
  </ul>
  <ul class="lista-itens" id="lista-vegan">
    <h4>Opções Veganas:</h4>
    <li><input type="checkbox" name="kafta" id="kafta"><label for="kafta">Kafta Veg</label></li>
    <li><input type="checkbox" name="batata-doce" id="batata-doce"><label for="batata-doce">Batata Doce</label></li>
    <li><input type="checkbox" name="legumes" id="legumes"><label for="legumes">Legumes</label></li>
    <li><input type="checkbox" name="hamburguer" id="hamburguer"><label for="hamburguer">Hambúrguer</label></li>
    <li><input type="checkbox" name="carne-soja" id="carne-soja"><label for="carne-soja">Carne de Soja</label></li>
    <li><input type="checkbox" name="berinjela" id="berinjela"><label for="berinjela">Berinjela</label></li>
    <li><input type="checkbox" name="cogumelo" id="cogumelo"><label for="cogumelo">Cogumelo</label></li>
    <li><input type="checkbox" name="frutas" id="frutas"><label for="frutas">Frutas</label></li>
  </ul>
  <ul class="lista-itens" id="lista-acomp">
    <h4>Acompanhamentos:</h4>
    <li><input type="checkbox" name="pao-alho" id="pao-alho"><label for="pao-alho">Pão de Alho</label></li>
    <li><input type="checkbox" name="tomate" id="tomate"><label for="tomate">Tomate</label></li>
    <li><input type="checkbox" name="farofa" id="farofa"><label for="farofa">Farofa</label></li>
    <li><input type="checkbox" name="maionese" id="maionese"><label for="maionese">Maionese</label></li>
    <li><input type="checkbox" name="pao-frances" id="pao-frances"><label for="pao-frances">Pão Francês</label></li>
    <li><input type="checkbox" name="queijo" id="queijo"><label for="queijo">Queijo</label></li>
    <li><input type="checkbox" name="cebola" id="cebola"><label for="cebola">Cebola</label></li>
    <li><input type="checkbox" name="pimentao" id="pimentao"><label for="pimentao">Pimentão</label></li>
  </ul>`;

  const buttonCalc = document.createElement("button");
  buttonCalc.classList.add("button-calc");
  buttonCalc.id = "buttonCalc";
  buttonCalc.innerText = "Calcular";

  mainContainer.appendChild(div);

  div.appendChild(h1);
  div.appendChild(formPessoas);
  div.appendChild(formAlimentos);
  div.appendChild(buttonCalc);

  const botaoMenos = document.querySelectorAll("#removePessoa");
  const botaoMais = document.querySelectorAll("#addPessoa");

  botaoMais.forEach((item) => {
    item.addEventListener("click", () => {
      const divItem = item.parentNode;
      const spanValor = divItem.querySelector("span");
      spanValor.innerText++;
    });
  });
  botaoMenos.forEach((item) => {
    item.addEventListener("click", () => {
      const divItem = item.parentNode;
      const spanValor = divItem.querySelector("span");
      if (spanValor.innerText > 0) {
        spanValor.innerText--;
      }
    });
  });

  const respiro = document.createElement("div")
  respiro.classList.add("respirando")
  mainContainer.appendChild(respiro)
}
