let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
// console.log(res);
//   return res.json();
// })
// .then((data) => {
//   console.log("CatFact_1: ", data.fact);
//   return fetch(url);
// })
// .then((res) => {
//   return res.json();
// })
// .then((data2) => {
//   console.log("CatFact_2: ", data2.fact);
// })
// .catch((err) => {
//   console.log("ERROR -", err);
// });

// now doing the job using async and await.

// async function getFacts() {
//   try{

//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//   }
//   catch(e){
//     console.log("Error - ", e);
//   }
// }
// getFacts();

// Using Axios
let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
  let fact = await getFacts();
  // console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact; 
})
async function getFacts() {
  try {
    let res = await axios.get(url);
    // let data = await res.json();
    return res.data.fact;
  } catch (e) {
    console.log("error- ", e);
    return "No fact found";
  }
}
