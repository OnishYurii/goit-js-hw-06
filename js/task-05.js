const inputRef = document.querySelector("input#name-input");
const nameRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", (event) => {
  nameRef.textContent = event.currentTarget.value || "Anonymous";
});
