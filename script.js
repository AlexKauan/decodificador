let inputTexto = document.querySelector(".text-area");
let outputTexto = document.querySelector("#copy_textarea");
let imgText = document.querySelector(".copy_text");
let btnText = document.querySelector(".copy_btn");

function validarEntrada(event) {
  var tecla = event.key;

  if (tecla.toUpperCase() === tecla && tecla.toLowerCase() !== tecla) {
    event.preventDefault();
  }
  var acentos = [
    "á",
    "é",
    "í",
    "ó",
    "ú",
    "â",
    "ê",
    "î",
    "ô",
    "û",
    "à",
    "è",
    "ì",
    "ò",
    "ù",
    "ã",
    "õ",
    "ñ",
    "ç",
    "´",
    "'",
  ];
  if (acentos.includes(tecla)) {
    event.preventDefault();
  }
}

inputTexto.addEventListener("keypress", validarEntrada);

function verifyText() {
  if (outputTexto.value === "") {
    btnText.classList.add("disable");
  } else {
    imgText.classList.add("disable");
    btnText.classList.add("enable");
    btnText.classList.remove("disable");
  }
}

function criptografar() {
  var removeAcento = inputTexto.value;

  var texto = removeAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let textoCript = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.querySelector("#copy_textarea").innerHTML = textoCript;

  verifyText();

  inputTexto.value = "";
}

function descriptografar() {
  verifyText();
  var removeAcento = inputTexto.value;

  var texto = removeAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  var textoDescript = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("copy_textarea").value = textoDescript;

  verifyText();

  inputTexto.value = "";
}
let verifyCopy = document.querySelector("#copy_info");

function copiar() {
  var copiarTexto = document.getElementById("copy_textarea");

  copiarTexto.select();
  document.execCommand("copy");
  verifyCopy.innerHTML = "O texto foi Copiado";
  setTimeout(() => {
    location.reload(true);
  }, 1000);
  outputTexto.value = "";
}
