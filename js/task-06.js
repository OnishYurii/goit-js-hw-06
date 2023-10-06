const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", checkAmountOfSymbols);

function checkAmountOfSymbols() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

// Вирішив додати третю умову, щоб при кількості символів рівній нулю, інпут мав початковий стиль.
