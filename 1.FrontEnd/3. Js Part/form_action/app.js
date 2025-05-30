// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

  // let user = document.querySelector("#user");
  // let pass = document.querySelector("#pass");

  // this will work same as the above code.
  // let user = this.elements[0];
  // let pass = this.elements[1];

  // console.log(user.value);
  // console.log(pass.value);

  // alert(`Hi ${user.value} your password is ${pass.value}`);
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function () {
//   console.log("input changed");
//   console.log("final value =", this.value);
// });

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
  console.log(input.value);
  p.innerText = inp.value;
});
