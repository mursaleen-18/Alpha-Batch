// let btn =  document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     alert("the button was clicked");
// }


// btn.onclick = sayhello;

let btns = document.querySelectorAll("button");

function sayhello() {
    console.log("hellow world");
}
for(btn of btns){
    btn.onclick = sayhello;  // this function is now applied on all the buttons on the page.
    btn.onmouseenter = function(){
        console.log("you entered a button");
    }
}
