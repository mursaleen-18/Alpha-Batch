// import axios from "axios";
let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";
let img = document.createElement("img");

btn.addEventListener("click", async () => {
  let image = await getDog();
  img.src = image;
  document.body.appendChild(img);
});

async function getDog() {
  try {
    const response = await axios.get(url);
    return response.data.message;
  } catch (error) {
    console.error(error);
  }
}