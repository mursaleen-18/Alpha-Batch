let jsonRes = '{"fact":"In an average year, cat owners in the United States spend over $2 billion on cat food.","length":86}';

// console.log(jsonRes); 

let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);
