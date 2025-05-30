// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;

//   console.log("color changed"); //just to whether it's working.
// });

// // function to get random RGB values.
// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `RGB(${red}, ${green}, ${blue})`;
//   return color;
// }

// -------------------------------
// Copilot generated code
document.querySelector("button").addEventListener("click", () => {
  const h3 = document.querySelector("h3");
  const colorBox = document.querySelector(".color-box");
  const randomColor = getRandomColor();

  h3.innerText = randomColor;
  colorBox.style.backgroundColor = randomColor;
  colorBox.innerText = randomColor;

  console.log("Color changed"); // Just to check whether it's working.
});

// Function to get random RGB values.
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `RGB(${red}, ${green}, ${blue})`;
}