let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  if (inp.value !== "") {
    // console.log('button was clicked'); // test
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    //now creating a delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    item.appendChild(delBtn);
    console.log(inp.value); //test
    inp.value = "";

    //adding animation
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.opacity = 1;
    }, 100);
  }
});

//deleting the item

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     // console.log(par); //test
//     par.remove();
// });
// }

// now using event delegation to delete the item.

ul.addEventListener("click", function (e) {
    if (e.target.nodeName == "BUTTON") {
      let listItem = e.target.parentElement;
      listItem.remove();
    }
});
