let url = "https://catfact.ninja/fact";

async function getCatFact() {
  try {
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    console.log("1st response_: ",data.fact);
    //one fact completes here.

    //fetching another fact
    let res2 = await fetch(url);
    console.log(res2);
    let data2 = await res2.json();
    console.log("2nd response_: ",data2.fact);
    //2nd fact completes here.

  } catch (e) {
    console.log("Error_", e);
  }
}

getCatFact(); //calling the function.
