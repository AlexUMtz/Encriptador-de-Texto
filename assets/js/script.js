const $btnEncrypt = document.querySelector(".btn-encrypt"),
  $btnDecrypt = document.querySelector(".btn-decrypt"),
  $textInput = document.querySelector(".text-area"),
  $textExit = document.querySelector(".text-exit"),
  $btnCopy = document.querySelector(".btn-copy");

/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"
*/

let matrixCode = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

let regex = /[a-z]/g;

$btnEncrypt.addEventListener("click", (e) => {
  if (!regex.test($textInput.value)) {
    $textExit.style.color = "red";
    $textExit.value = "Error: Ingresa solo letras minusculas y sin acentos";
    setTimeout(() => {
      $textExit.value = "";
      $textInput.value = "";
    }, 2000);
  } else {
    const messageEncrypt = encrypt($textInput.value);
    $textExit.value = messageEncrypt;
    $textInput.value = "";
    $textExit.style.color = "#0a3871";
    $textExit.style.backgroundImage = "none";
  }
});

$btnDecrypt.addEventListener("click", (e) => {
  if (!regex.test($textInput.value)) {
    $textExit.style.color = "red";
    $textExit.value = "Error: Ingresa solo letras minusculas y sin acentos";
    setTimeout(() => {
      $textExit.value = "";
      $textInput.value = "";
    }, 2000);
  } else {
    const messageEncrypt = decrypt($textInput.value);
    $textExit.value = messageEncrypt;
    $textInput.value = "";
    $textExit.style.backgroundImage = "none";
  }
});

const encrypt = (message) => {
  message = message.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (message.includes(matrixCode[i][0])) {
      message = message.replaceAll(matrixCode[i][0], matrixCode[i][1]);
    }
  }

  return message;
};

const decrypt = (message) => {
  message = message.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (message.includes(matrixCode[i][1])) {
      message = message.replaceAll(matrixCode[i][1], matrixCode[i][0]);
    }
  }

  return message;
};
