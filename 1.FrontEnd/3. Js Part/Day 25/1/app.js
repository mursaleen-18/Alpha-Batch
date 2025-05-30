// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let result = two() + one();
//     console.log(result);
// }
// three();

// ==========================================================
// callback Hell...

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay)
// }

// changeColor("red", 1000, ()=> {
//     changeColor("orange", 1000, ()=> {
//         changeColor("green", 1000, ()=> {
//             changeColor("yellow", 1000, ()=> {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// changeColor("orange", 2000);
// changeColor("green",3000);

// setTimeout(()=>{
//     h1.style.color = 'red';
// }, 1000);
// setTimeout(()=>{
//     h1.style.color = 'orange';
// }, 2000);
// setTimeout(()=>{
//     h1.style.color = 'green';
// }, 3000);

// ========================================================================

// Promises...

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     // console.log("your data was saved");
//     success();
//   } else {
//     // console.log("weak connection. data not saved");
//     failure();
//   }
// }

// savetoDb(
//   "hellow world",
//   () => {
//     console.log("success1: your data was saved ");
//     savetoDb(
//       "hellow world2",
//       () => {
//         console.log("success2: data was saved");
//         savetoDb(
//           "hellow world3",
//           () => {
//             console.log("success3: your data was saved");
//           },
//           () => {
//             console.log("failure3: your was not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure1: weak connection. data was not saved");
//   }
// );

// ========================================================================

//Promises....
// savetoDb(
//     "hellow world",
//     () => {
//       console.log("success1: your data was saved ");
//       savetoDb(
//         "hellow world2",
//         () => {
//           console.log("success2: data was saved");
//           savetoDb(
//             "hellow world3",
//             () => {
//               console.log("success3: your data was saved");
//             },
//             () => {
//               console.log("failure3: your was not saved");
//             }
//           );
//         },
//         () => {
//           console.log("failure2: weak connection");
//         }
//       );
//     },
//     () => {
//       console.log("failure1: weak connection. data was not saved");
//     }
//   );

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved.");
    } else {
      reject("failure: data was not saved.");
    }
  });
}

// savetoDb("hellow world") //req = promise object.
//   .then(() => {
//     console.log("data_1 saved: promise was resolved.");
//     // console.log(request);
//     savetoDb("hellow world_2").then(() => {
//       console.log("data_2 was saved");
//     });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//     // console.log(request);
//   });

// ================================================================

//more compact and readable version(promise chaining).
// savetoDb("hellow world")
// .then(()=>{
//     console.log("data_1 saved");
//     return savetoDb("hellow world_2");
// })
// .then(()=>{
//     console.log("data_2 saved");
//     return savetoDb("Mursaleen");
// })
// .then(()=>{
//     console.log("data_3 saved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });

//results and errors in Promises. (arguments in then and catch)
// savetoDb("hellow world")
// .then((result)=>{
//     console.log("data_1 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("hellow world_2");
// })
// .then((result)=>{
//     console.log("data_2 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("Mursaleen");
// })
// .then((result)=>{
//     console.log("data_3 saved");
//     console.log("result of promise: ", result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log("error of promise: ", error);
// });

// ================================================================

//now applying this Promise chaining in the previous color changing code.
h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected.");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed");
    }, delay);
  });
}

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
//the above code can be written in more redable form as  below.

// changeColor("red", 1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("yellow", 1000);
// })
// .then(()=>{
//     console.log("yellow color was completed");
//     return changeColor("blue", 1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
// });

//the above code is going to be more shorten and compact with the help async and await.

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("error caught: ");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("new number is: ", a + 3);
}

demo();

// ========================================================
//async...

async function greet() {
  throw "weak connection";
  return "hellow world";
}

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was: ", result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err: ",err);
// });

// let demo = async ()=>{
//     return 5;
// };

// =============================================================

// await keyword ()....

// function getNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNumber();
//   await getNumber();
//   await getNumber();
//   await getNumber();
//   getNumber();
// }
