// Select all the HTML elements
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

// Add event listener to the div element
// div[0].addEventListener('click', function() {
//   console.log('Div is clicked');
// });

// this works too.
div.addEventListener('click', function(){
    console.log("Div was clicked: ");
} );

// Add event listener to the ul element
ul.addEventListener('click', function(event){
    event.stopPropagation(event);
    console.log("ul was clicked: ");
});

// Add event listener to the li elements
lis.forEach(function(li){
    li.addEventListener('click', function(event){
        event.stopPropagation();
        console.log("li was clicked: ");
    });
});