// a dummy function to simulate saving data to a database
function savetoDb(data, success, failure) {
  // this takes three arguments success and failure are callback functions
  let interenetSpeed = Math.random() * 10 + 1;
  if (interenetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

// savetoDb(
//   "some data", // first argument is data to be saved.
//   () => {
//     console.log("your data was saved");
//     savetoDb(
//       // this is a nested callback function.
//       "hellow world", // first argument is data to be saved.
//       () => {
//         // success callback function
//         console.log("success 2: data 2 was saved");
//         savetoDb(   // this is a nested callback function.
//           "data 3",
//           () => {   // success callback function
//             console.log("success 3: data 3 was saved");
//           },
//           () => {   // failure callback function
//             console.log("failure 3: weak connection");
//           }
//         );
//       },
//       () => {   // failure callback function
//         console.log("failure 2: weak connection");
//       }
//     );
//   },
//   () => {   // failure callback function
//     console.log("weak connection your data was not saved");
//   }
// );

// Promises=============================================

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let interenetSpeed = Math.floor(Math.random() * 10) + 1;
    if (interenetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

// using .then and .catch methods
// this returns a promise object
savetoDb("some data")
  .request.then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });
