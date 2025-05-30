let url = "https://catfact.ninja/fact";

async function getCatFact() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (e) {
    console.error("Error: ", e);
  }
}

getCatFact();