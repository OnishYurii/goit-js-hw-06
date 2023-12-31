let counterValue = 0;
const counterEl = document.querySelector("#value");
counterEl.textContent = counterValue;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const handleDecrementBtnClick = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};
const handleIncrementBtnClick = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleDecrementBtnClick);
incrementBtn.addEventListener("click", handleIncrementBtnClick);
