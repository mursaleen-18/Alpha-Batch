let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// })

btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button clicked");
})

let inp = document.querySelector("input");
 
inp.addEventListener("keydown", function(e){
    console.log("key =", e.key);
    console.log("code =", e.code);
    console.log("key was pressed.");
})