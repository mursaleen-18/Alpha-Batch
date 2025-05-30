// const math  = require("./math");

// console.log(math);


// let n = 5;

// for (let i = 0; i < n; i++) {
//   console.log("hellow", i);
// }

// console.log("bye");


// const math = require("./math");
// // console.log(someValue);
// // console.log(math.sum(2,2));
// console.log(math.pi);


//now trying to exports a directory
// const info = require("./Fruits");

// console.log(info);

import {sum, pi} from "./math.js";

console.log(sum(1,3));
// console.log(pi);

//impot random-word package
import { generate} from "random-words";

console.log(generate());