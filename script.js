import homeScript from "./script/home.js";
import calcScript from "./script/calc.js";
import resultScript from "./script/result.js";

homeScript();
const divHome = document.getElementById("divHome");
const buttonHome = document.getElementById("buttonHome");
buttonHome.addEventListener("click", () => {
  divHome.remove();
  calcScript();
  resultScript();
});

// Colocando aqui para usar futuramente
const objStorage = localStorage.getItem("registrado");
const objRegistro = JSON.parse(objStorage);
console.log(objRegistro);
