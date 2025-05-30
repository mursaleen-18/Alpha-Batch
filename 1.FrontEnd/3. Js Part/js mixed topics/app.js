// for(let i=1; i<=5; i++){
//     console.log(i);
// }
//facorite movie guess game

// const favMovie="avatar";
// let guess = prompt("Guess the favorite movie");
// while ((guess!=favMovie)&&(guess!= "quit")){
//     guess=prompt("wrong! try again");

// }



// let student = {
//     name: "Mursaleen",
//     age: 23,
//     marks: 78.6,
//     city: "Delhi"
// };

// return keyword
// function getSum(n){
//     let sum =0;
//     for(let i=1; i<=n; i++){
//         sum +=1;
//     }
//     return sum;
// }

// lexical function
// let greet = "hellow";
// function changeGreet(){
//     let greet = "world!";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();

// Higher order function 
// function multipleGreet(func, count){
//     for(i=1; i<=count;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hellow!");
// }
// multipleGreet(greet,5);


// methods
// const calculator = {
//     add: function(a,b){
//         return(a+b);
//     },
//     sub: function(a,b){
//         return(a-b);
//     },
//     mul: function(a,b){
//         return(a*b);
//     }
// }

// methods (shorthand)
// const calculator = {
//     add(a,b){
//         return(a+b);
//     },
//     sub(a,b){
//         return(a-b);
//     },
//     mul(a,b){
//         return(a*b);
//     }
// }

// this keyword
// const student = {
//     name: "Mursaleen",
//     age:23,
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} got average marks = ${avg}`);
//     }
// }

//Arrow functions
// const sum = (a,b) => {
//     console.log(a+b);
// };
// const cube = (n) => {
//     return(n*n*n);
// }
// const pow = (a,b) => {   
//     return (a**b);
// }
// the above code can also be written as below
// const pow = (a,b) => a**b;   //also known as implicit return.

// setTimeout function
// console.log("hey there! ");
// setTimeout(() => {
//     console.log("Apna College.");
// }, 2000);
// console.log("Welcome to ");

// const square = (n) =>{return n*n} ;

// prints hellow world 5 time at an interval of 2 seconds.
// let id = setInterval(() => {
//     console.log("hellow world");
// }, 2000);
// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

//map method
// let num = [1,2,3,4];
// let double = num.map(function(el){
//     return(el*2);
// });
// console.log(double);

// filter method
// let nums =[2,4,1,5,6,2,7,8,9];
// let even = nums.filter((num)=>(num%2==0));