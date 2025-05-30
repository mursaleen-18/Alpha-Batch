let h1 = document.querySelector("h1"); // selecting the h1 element

// // changing the color of the h1 element after 1, 2, and 3 seconds
// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);   // color will change to red after 1 second

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);   // color will change to orange after 2 seconds

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);  // color will change to green after 3 seconds

//===========================================================

// now doing the same thing in more better way using function.

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// callBack hell.

// changeColor("red", 1000, ()=>{
//         changeColor('orange', 1000, ()=>{
//             changeColor('green', 1000, ()=>{
//                 changeColor("yellow", 1000, ()=>{
//                     changeColor("blue", 1000);
//                 });
//             });
//         });
// })

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

// ===========================================================

// dealing with this callback Hell using Promises.

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
        resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
.then(()=>{
    console.log("color changed to red");
    return changeColor("red", 1000);
})
.then(()=>{
    console.log("color changed to orange");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("color changed to green");
    return changeColor("yellow", 1000);
})
.then(()=>{
    console.log("color changed to yellow");
    return changeColor("blue", 1000);
});