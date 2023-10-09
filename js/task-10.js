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

createBtn.addEventListener("click", createBoxes);
cleanBtn.addEventListener("click", destroyBoxes);

function createBoxes(event) {
  const amount = input.value;
  // console.log(input.value);
  let boxSize = 30;
  const newBoxArray = [];

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxArray.push(newBox);
    boxSize += 10;
  }
  console.log(...newBoxArray);
  divOfBoxes.append(...newBoxArray);
}

function destroyBoxes() {
  divOfBoxes.innerHTML = "";
}
