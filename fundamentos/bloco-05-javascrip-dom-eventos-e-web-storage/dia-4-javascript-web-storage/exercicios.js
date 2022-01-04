//criando variáveis
let selectBack = document.getElementById("back");
let body = document.getElementsByTagName("body")[0];
let selectText = document.getElementById("text");
let selectTam = document.getElementById("font");
let selectSpc = document.getElementById("space");
let text = document.getElementById("lorem");
let selectFamily = document.getElementById("family");
let backgroundColor = "";
let fontColor = "";
let fontSize = "";
let spaceLines = "";
let fontFamily = "";

//let nome = prompt('Qual seu nome?')

//definindo as preferências e as variaveis
selectBack.addEventListener("change", () => {
  body.style.backgroundColor = selectBack.value;
  if (selectBack.value == "black") {
    body.style.color = "white";
    backgroundColor = body.style.backgroundColor;
  } else {
    body.style.color = "black";
    backgroundColor = body.style.backgroundColor;
  }
  localStorage.setItem("backgroundColor", selectBack.value);
});

selectText.addEventListener("change", () => {
  body.style.color = selectText.value;
  fontColor = body.style.color;
  localStorage.setItem("fontColor", selectText.value);
});

selectTam.addEventListener("change", () => {
  body.style.fontSize = selectTam.value;
  fontSize = body.style.fontSize;
  localStorage.setItem("fontSize", selectTam.value);
  console.log(fontSize);
});

selectSpc.addEventListener("change", () => {
  text.style.lineHeight = selectSpc.value;
  spaceLines = text.style.lineHeight;
  console.log(spaceLines);
  localStorage.setItem("spaceLines", selectSpc.value);
});

selectFamily.addEventListener("change", () => {
  text.style.fontFamily = selectFamily.value;
  fontFamily = text.style.fontFamily;
  console.log(fontFamily);
  localStorage.setItem("fontFamily", selectFamily.value);
});

function iniciar() {
  if (localStorage.backgroundColor) {
    body.style.backgroundColor = localStorage.backgroundColor;
    body.style.color = localStorage.fontColor;
    body.style.fontSize = localStorage.fontSize;
    document.getElementById("text").style.lineHeight = localStorage.lineHeight;
    document.getElementById("text").style.fontFamily = localStorage.fontFamily;

  }
}

//web Storage

// Check browser support
if (typeof Storage !== "undefined") {
  // Store
  if (localStorage.visitas) {
    localStorage.visitas = parseInt(localStorage.visitas) + 1;
  } else {
    localStorage.visitas = "1";
  }
  console.log(localStorage.visitas);

} else {
  document.getElementById("result").innerHTML =
    "Desculpe, sem suporte para Web Storage";
}

window.addEventListener("load", iniciar);
