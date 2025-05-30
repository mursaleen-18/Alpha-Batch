let url = "https://dog.ceo/api/breeds/image/random";

import axios from "axios";

let img = document.createElement("img");

img.src = image;

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let image = await getDog();
});

async function getDog() {
  try {
    const response = await axios.get(url);
    console.log(response.data.message);
  } catch (error) {
    console.error(error);
  }
}
