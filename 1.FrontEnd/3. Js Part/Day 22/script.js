console.log("hellow world");
// console.log(document.body);
document.getElementById("p").textContent = "hellow, World!";
var element = document.createElement('p');
element.textContent = "hey there.";
document.body.appendChild(element);
// alert("something went wrong");
// var age = prompt ("how old are you?");
// console.log(age);

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
document.body.appendChild(canvas);
// canvas.border = '2px solid black';
// canvas.background = 'blue';
// document.body.style.backgroundColor = "#AA0000";


