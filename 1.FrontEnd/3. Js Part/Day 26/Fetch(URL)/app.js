let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    console.log(res); // Response object

    console.log(res); // print the result. JSON object (returns a promise).

    return res.json(); // Parse the data.  JSON object (returns a promise).
  })
    .then((data) => {
        console.log("data-1: ", data.fact); // JSON data
        return fetch(url);
    })

    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log( "data-2: ", data2.fact);
    })
  .catch((err) => {
    console.log("ERROR - ", err); // Error message
  });


console.log("End of the code");// this will be printed first because fetch is async. API calls work Asynchronously(non-blocking)