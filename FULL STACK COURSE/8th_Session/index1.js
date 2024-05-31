const form=document.querySelector('form')
const h1=document.querySelector('.result')
let firstInput= form.children[0];
let secondInput= form.children[1];
let btn=form.children[2];

form.addEventListener("submit", (event) =>{
   // stop page refresh after submit
    event.preventDefault();
    //read values from 2 inputs
    let v1=Number(firstInput.value);
    let v2=Number(secondInput.value);
    //sum
    let sum=v1+v2;
    //append to body
    h1.textContent=sum;
});