let secretNumber;
let maxAttemps = 3;
let attemps = 1;
let generatedNumbersList = [];
let maxNumber = 3;

setNewGame();

function verifyIntent() {
  let userValue = getIntById("userValue");
  if (maxAttemps === attemps && secretNumber !== userValue) {
    endGame();
    return;
  } else {
    if (secretNumber === userValue) {
      assignTextToElement("p", `Felicitaciones acertaste! el número es: ${secretNumber}, y lo hiciste en ${attemps} ${attemps > 1 ? "intentos" : "intento"}`);
      disableElementById("verifyButton");
      enableElementById("reset");
    } else {
      attemps++;
      resetField("userValue");
      focusField("userValue");
      if (userValue > secretNumber) {
        assignTextToElement("p", "El número es menor");
      } else {
        assignTextToElement("p", "El número es mayor");
      }
    }
  }
  return;
}

function generateRandomNumber() {
  let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
  if (generatedNumbersList.length == maxNumber) {
    assignTextToElement("p", "Ya se sortearon todos los números, terminó el juego");
    disableElementById("reset");
    disableElementById("verifyButton");
    disableElementById("userValue");
    exit();
  } else {
    if (generatedNumbersList.includes(generatedNumber)) {
      return generateRandomNumber();
    } else {
      generatedNumbersList.push(generatedNumber);
      return generatedNumber;
    }
  }
}

function setNewGame() {
  resetFieldsAndMessages();
  focusField("userValue");
  return;
}

function endGame() {
  assignTextToElement("p", `Has perdido, el máximo de intentos es: ${maxAttemps} y el número secreto era: ${secretNumber}`);
  disableElementById("verifyButton");
  enableElementById("reset");
}

function resetField(input) {
  document.getElementById(input).value = "";
  return;
}

function focusField(input) {
  document.getElementById(input).focus();
  return;
}

function setInitialConditions() {
  attemps = 1;
  secretNumber = generateRandomNumber();
  assignTextToElement("h1", "Juego del número secreto");
  assignTextToElement("p", `Indica un número del 1 al ${maxNumber}`);
}

function resetFieldsAndMessages() {
  resetField("userValue");
  disableElementById("reset");
  enableElementById("verifyButton");
  setInitialConditions();
  return;
}

function disableElementById(id) {
  document.getElementById(id).setAttribute("disabled", "");
}

function enableElementById(id) {
  document.getElementById(id).removeAttribute("disabled");
}

function assignTextToElement(tag, text) {
  let element = document.querySelector(tag);
  element.innerText = text;
  return;
}

function getIntById(id) {
  return parseInt(document.getElementById(id).value);
}

function assignTextById(id, text) {
  let element = document.getElementById(id);
  element.innerText = text;
  return;
}
