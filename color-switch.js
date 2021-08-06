const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

let timerId = null;
refs.btnStart.addEventListener("click", onClickBtnStart);
refs.btnStop.addEventListener("click", onClickBtnStop);

function onClickBtnStart() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  refs.btnStart.disabled = true;
}

function onClickBtnStop() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
}
