function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divOfControls = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const cleanBtn = document.querySelector("[data-destroy]");
const divOfBoxes = document.querySelector("#boxes");
let amount;

input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});
createBtn.addEventListener("click", createBoxes());
cleanBtn.addEventListener("click", destroyBoxes());

function createBoxes(event) {
  // const amount = input.value;
  // console.log(input.value);
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    divOfBoxes.append(newBox);
    boxSize += 10;
  }
}

function destroyBoxes() {
  divOfBoxes.innerHTML = "";
}

// Не розумію чому не працює, буду чекати на ваші коментарі
