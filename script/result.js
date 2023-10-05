// Armazenando dados json
let carnes = [];
let bebidas = [];
let vegans = [];
let acomps = [];

// Solicitando os dados do arquivo alimentos.json
fetch("script/alimentos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (dados) {
    carnes.push(...dados.Carnes);
    bebidas.push(...dados.Bebidas);
    vegans.push(...dados.Vegan);
    acomps.push(...dados.Acomp);
  })
  .catch(function (error) {
    console.error("Ocorreu um erro ao carregar a lista de alimentos", error);
  });

// function de apresentação do calculo final
export default function resultCalc() {
  const buttonCalc = document.getElementById("buttonCalc");
  buttonCalc.addEventListener("click", calcResult);

  function calcResult() {
    let adultoCome = 500;
    let criancaCome = 200;

    let carnesSelecionadas = [];
    let bebidasSelecionadas = [];
    let veganSelecionadas = [];
    let acompSelecionadas = [];

    // Puxando o número de pessoas e quantos vão beber
    const numAdultos = Number(document.getElementById("numAdultos").innerText);
    const numBeber = Number(document.getElementById("numBeber").innerText);
    const numCriancas = Number(document.getElementById("numCriancas").innerText);
    const numVegans = Number(document.getElementById("numVegans").innerText);

    // Carnes selecionadas e forEach para adicionar a array de selecionados
    const listaCarnes = document.querySelectorAll("#lista-carnes li input");
    carnes.forEach((carne) => {
      listaCarnes.forEach((item) => (item.checked ? (carne.id === item.id ? carnesSelecionadas.push(carne) : "") : ""));
    });

    // Bebidas selecionadas e forEach para adicionar a array de selecionados
    const listaBebidas = document.querySelectorAll("#lista-bebidas li input");
    bebidas.forEach((bebida) => {
      listaBebidas.forEach((item) => (item.checked ? (bebida.id === item.id ? bebidasSelecionadas.push(bebida) : "") : ""));
    });

    // Vegan selecionadas e forEach para adicionar a array de selecionados
    const listaVegan = document.querySelectorAll("#lista-vegan li input");
    vegans.forEach((vegan) => {
      listaVegan.forEach((item) => (item.checked ? (vegan.id === item.id ? veganSelecionadas.push(vegan) : "") : ""));
    });

    // Acompanhamentos selecionados e forEach para adicionar a array de selecionados
    const listaAcomp = document.querySelectorAll("#lista-acomp li input");
    acomps.forEach((acomp) => {
      listaAcomp.forEach((item) => (item.checked ? (acomp.id === item.id ? acompSelecionadas.push(acomp) : "") : ""));
    });

    // Criando elementos para apresentação dos resultados
    const mainContainer = document.querySelector("main");

    const container = document.createElement("div");
    container.classList.add("container-result");
    mainContainer.appendChild(container);

    const h1 = document.createElement("h1");
    h1.innerText = "Como ficou seu churrasco:";
    container.appendChild(h1);

    const divResults = document.createElement("div");
    container.appendChild(divResults);

    const spanTotal = document.createElement("span");
    spanTotal.classList.add("total-result");
    container.appendChild(spanTotal);

    const spanX = document.createElement("span");
    spanX.classList.add("spanX");
    container.appendChild(spanX);
    spanX.addEventListener("click", () => {
      mainContainer.removeChild(container);
      mainContainer.removeChild(respiro);
    });

    // Calculos e implementações

    const numCarnes = carnesSelecionadas.length;
    const numVegan = veganSelecionadas.length;
    const pesoCarnes = numAdultos * adultoCome + numCriancas * criancaCome;
    const pesoVegans = numVegans * adultoCome;

    let totalValor = 0;

    // Calculo das carnes
    let carnePeso = 0;
    let carneValor = 0;
    let carneTotal = 0;

    if (carnesSelecionadas.length) {
      const divTitle = document.createElement("div");
      divTitle.classList.add("title-lista");
      divTitle.innerHTML = `<img src="./img/carne-icon.svg" alt=""> <h2>Carnes:</h2>`;
      divResults.appendChild(divTitle);

      const ul = document.createElement("ul");
      ul.classList.add("lista-result");
      divResults.appendChild(ul);

      carnesSelecionadas.forEach((carne) => {
        carnePeso = pesoCarnes / numCarnes;
        carneValor = (carnePeso / carne.peso) * carne.preco;
        const valorConvertido = carneValor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        carneTotal += carneValor;

        const li = document.createElement("li");
        li.innerHTML = `<h4>${carne.id}</h4>
                      <p>Peso: ${carnePeso.toFixed()} g</p>
                      <p>Preço: ${valorConvertido}</p>`;
        ul.appendChild(li);
      });
      const h3 = document.createElement("h3");
      h3.innerHTML = `Total: ${carneTotal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
      divResults.appendChild(h3);
    }

    // Calculo das bebidas
    let bebidaValor = 0;
    let bebidaTotalCA = 0;
    let bebidaTotalSA = 0;

    if (bebidasSelecionadas.length) {
      const divTitle = document.createElement("div");
      divTitle.classList.add("title-lista");
      divTitle.innerHTML = `<img src="./img/bebidas-icon.svg" alt=""> <h2>Bebidas:</h2>`;
      divResults.appendChild(divTitle);

      const ul = document.createElement("ul");
      ul.classList.add("lista-result");
      divResults.appendChild(ul);

      bebidasSelecionadas.forEach((bebida) => {
        const li = document.createElement("li");
        if (bebida.alcool) {
          bebidaValor = bebida.qnt * bebida.preco * numBeber;
          const valorConvertido = bebidaValor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
          bebidaTotalCA += bebidaValor;
          li.innerHTML = `<h4>${bebida.id}</h4>
                      <p>Quantidade: ${bebida.qnt * numBeber}</p>
                      <p>Preço: ${valorConvertido} (${bebida.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} unidade)</p>`;
          ul.appendChild(li);
        } else {
          bebidaValor = bebida.qnt * bebida.preco * (numAdultos + numVegans);
          const valorConvertido = bebidaValor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
          bebidaTotalSA += bebidaValor;
          li.innerHTML = `<h4>${bebida.id}</h4>
                      <p>Quantidade: ${bebida.qnt * (numAdultos + numVegans)}</p>
                      <p>Preço: ${valorConvertido} (${bebida.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} unidade)</p>`;
          ul.appendChild(li);
        }
      });
      const h3 = document.createElement("h3");
      h3.innerHTML = `Total sem álcool: ${bebidaTotalSA.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} <br> 
    Total com álcool: ${bebidaTotalCA.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
      divResults.appendChild(h3);
    }
    // Calculo opções veganas
    let veganValor = 0;
    let veganPeso = 0;
    let veganTotal = 0;

    if (veganSelecionadas.length) {
      const divTitle = document.createElement("div");
      divTitle.classList.add("title-lista");
      divTitle.innerHTML = `<img src="./img/vegan-icon.svg" alt=""> <h2>Vegan:</h2>`;
      divResults.appendChild(divTitle);

      const ul = document.createElement("ul");
      ul.classList.add("lista-result");
      divResults.appendChild(ul);

      veganSelecionadas.forEach((vegan) => {
        veganPeso = pesoVegans / numVegan;
        veganValor = (veganPeso / vegan.peso) * vegan.preco;
        veganTotal += veganValor;
        const valorConvertido = veganValor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        const li = document.createElement("li");
        li.innerHTML = `<h4>${vegan.id}</h4>
                      <p>Peso: ${veganPeso.toFixed()} g</p>
                      <p>Preço: ${valorConvertido}</p>`;
        ul.appendChild(li);
      });

      const h3 = document.createElement("h3");
      h3.innerHTML = `Total: ${veganTotal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
      divResults.appendChild(h3);
    }

    // Calculo acompanhamentos
    let acompValor = 0;
    let acompTotal = 0;

    if (acompSelecionadas.length) {
      const divTitle = document.createElement("div");
      divTitle.classList.add("title-lista");
      divTitle.innerHTML = `<img src="./img/acomp-icon.svg" alt=""> <h2>Acompanhamentos:</h2>`;
      divResults.appendChild(divTitle);

      const ul = document.createElement("ul");
      ul.classList.add("lista-result");
      divResults.appendChild(ul);

      acompSelecionadas.forEach((acomp) => {
        const li = document.createElement("li");
        acompValor = acomp.qnt * acomp.preco * (numAdultos + numVegans);
        const valorConvertido = acompValor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        acompTotal += acompValor;
        li.innerHTML = `<h4>${acomp.id}</h4>
                      <p>Quantidade: ${acomp.qnt * (numAdultos + numVegans)}</p>
                      <p>Preço: ${valorConvertido}</p>`;
        ul.appendChild(li);
      });
      const h3 = document.createElement("h3");
      h3.innerHTML = `Total: ${acompTotal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
      divResults.appendChild(h3);
    }

    let valorTotal = acompTotal + bebidaTotalCA + bebidaTotalSA + veganTotal + carneTotal;
    spanTotal.innerText = `Total: ${valorTotal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;

    const respiro = document.createElement("div");
    respiro.classList.add("respirando");
    respiro.innerText = "teste";
    mainContainer.appendChild(respiro);
  }
}
