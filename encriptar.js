let textareaUno = document.getElementById("primerTextarea"); // Obtiene el textarea del HTML y lo asigna a una variable.
let textareaDos = document.getElementById("segundoTextarea"); // Obtiene el textarea del Html y lo asigna a una variable.
let botonEncriptar = document.getElementById("btnEncriptar"); // Obtiene el botón del HTML y lo asigna a una variable.
let botonDesencriptar = document.getElementById("btnDesencriptar"); // Obtiene el botón del HTML y lo asigna a una variable.
let botonCopiar = document.getElementById("btnCopiar"); // Obtiene el botón del HTML y lo asigna a una variable.
let infoUno = document.querySelector(".informacion");
let infoDos = document.querySelector(".informacion2");
let msnUno = document.querySelector(".mensaje-spanUno");
let msnDos = document.querySelector(".mensaje-spanDos");

// -------------------------------------------------- //
//------ Agregando evento al Botón Encriptar --------//
// ------------------------------------------------ //

botonEncriptar.addEventListener("click", function () {
  if (textareaUno.value === "") {
    infoUno.style.display = "none";
    msnUno.style.display = "block";
    msnUno.classList.add("mensajeError");
    msnUno.innerHTML = "No hay datos para encriptar.!!!";
    setTimeout(function () {
      msnUno.style.display = "none";
      infoUno.style.display = "block";
      textareaUno.focus();
    }, 1200);
  } else {
    // Encripta el texto del textarea 1.
    let textoEncriptado = encriptar(textareaUno.value);
    // Muestra el texto encriptado en el textarea 2.
    textareaDos.value = textoEncriptado;
    textareaDos.focus();
    infoUno.style.display = "none";
    msnUno.style.display = "block";
    msnUno.classList.add("textoEncriptado");
    msnUno.innerHTML = "Texto Encriptado.";
    infoDos.style.display = "none";
    msnDos.style.display = "block";
    msnDos.classList.remove("mensajeError");
    msnDos.classList.add("textoCopiado");
    msnDos.innerHTML = "Copia el texto para desencriptar.";
    setTimeout(function () {
      msnUno.classList.remove("textoEncriptado");
      msnUno.style.display = "none";
      infoUno.style.display = "block";
      textareaUno.value = ""; // Limpia el textarea 1
    }, 1200); // Espera 500ms
  }
});


// ----------------------------------------------------- //
//------ Agregando evento al Botón Desencriptar --------//
// --------------------------------------------------- //

botonDesencriptar.addEventListener("click", function () {
  if (textareaUno.value === "") {
    infoUno.style.display = "none";
    msnUno.style.display = "block";
    msnUno.classList.add("mensajeError");
    msnUno.innerHTML = "No hay datos para desencriptar.!!!";
    setTimeout(function () {
      msnUno.style.display = "none";
      infoUno.style.display = "block";
    }, 1200);
  } else {
  // Desencripta el texto del textarea 2 y lo muestra en el textarea 1
  let textoDesencriptado = desencriptar(textareaUno.value);
    textareaUno.value = textoDesencriptado;
    infoUno.style.display = "none";
    msnUno.style.display = "block";
    msnUno.classList.add("textoEncriptado");
    msnUno.innerHTML = "Texto Desencriptado.";
    setTimeout(function () {
      msnUno.classList.remove("textoEncriptado");
      msnUno.style.display = "none";
      infoUno.style.display = "block";
    }, 3000);
  }
});

// ----------------------------------------------- //
//------ Agregando evento al Botón Copiar --------//
// --------------------------------------------- //

botonCopiar.addEventListener("click", function () {
  if (textareaDos.value === "") {
    infoDos.style.display = "none";
    msnDos.style.display = "block";
    msnDos.classList.add("mensajeError");
    msnDos.innerHTML = "Encripte un texto primero.";
    setTimeout(function () {
      msnDos.classList.remove("mensajeError");
      msnDos.style.display = "none";
      infoDos.style.display = "block";
    }, 1200);
  } else {
    textareaDos.select();
    document.execCommand("copy");
    infoDos.style.display = "none";
    msnDos.style.display = "block";
    msnDos.classList.add("textoEncriptado");
    msnDos.innerHTML = "El texto ha sido copiado.";
    setTimeout(function () {
      textareaUno.focus();
      location.reload();
      msnDos.classList.remove("textoEncriptado");
      msnDos.classList.remove("textoCopiado");
      msnDos.style.display = "none";
      infoDos.style.display = "block";
      textareaDos.value = ""; // Limpia el textarea 2
    }, 1200);
  }
});

// ------------------------------------------------ //
//-------- Función para codificar el texto --------//
// ---------------------------------------------- //

function encriptar(encriptarString) {
  // Matriz de códigos
  let codigoMatriz = [
    ["e", "enter"], // e es igual a enter
    ["i", "imes"], // i es igual a imes
    ["a", "ai"], // a es igual a ai
    ["o", "ober"], // o es igual a ober
    ["u", "ufat"], // u es igual a ufat
  ];
  // Convierte el texto a minúsculas
  encriptarString = encriptarString.toLowerCase();
  // Recorre la matriz
  for (let i = 0; i < codigoMatriz.length; i++) {
    // Si encuentra una letra encriptada en el texto
    if (encriptarString.includes(codigoMatriz[i][0])) {
      // Reemplaza la letra por el código
      encriptarString = encriptarString.replaceAll(
        codigoMatriz[i][0],
        codigoMatriz[i][1]
      );
    }
  }
  return encriptarString; // Retorna el texto encriptado
}

// ------------------------------------------------ //
//------ Función para decodificar el texto --------//
// ---------------------------------------------- //

function desencriptar(desencriptarString) {
  // Matriz de códigos
  let codigoMatriz = [
    ["enter", "e"], // enter es igual a e
    ["imes", "i"], // imes es igual a i
    ["ober", "o"], // ober es igual a o
    ["ai", "a"], // ai es igual a a
    ["ufat", "u"], // ufat es igual a u
  ];
  // Recorre la matriz
  for (let i = 0; i < codigoMatriz.length; i++) {
    // Si encuentra una letra encriptada en el texto
    if (desencriptarString.includes(codigoMatriz[i][0])) {
      // Reemplaza la letra por el código
      desencriptarString = desencriptarString.replaceAll(
        codigoMatriz[i][0],
        codigoMatriz[i][1]
      );
    }
  }
  return desencriptarString; // Retorna el texto desencriptado
}


