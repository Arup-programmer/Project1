const randomColor = function () {
  const Hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startchangingcolor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchangingcolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
function changeBgColor() {
  const color = randomColor();
  document.body.style.backgroundColor = color;

  // Display the hex code
  console.log(color); // Logs to console

  // Optionally, show it on the webpage
  const colorDisplay = document.querySelector("#color-code");
  if (colorDisplay) {
    colorDisplay.textContent = color;
  }
}

document.querySelector("#start").addEventListener("click", startchangingcolor);
document.querySelector("#stop").addEventListener("click", stopchangingcolor);
document.querySelector("#change").addEventListener("click", changeBgColor);
