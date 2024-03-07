console.log('hello world');

const div = document.querySelector("div");
const form = document.querySelector('form');
const button = document.querySelector('button');

div.addEventListener('click',function (event){
    console.log('div clicked'); 
})
form.addEventListener('click',function (event){
    event.stopPropagation();
    console.log('form clicked'); 
})

button.addEventListener('click',function (event){
    console.log('button clicked'); 
})


    
