
/*//JS TO JSON
let person={
    pid:100,
    name:"ravi"
}
let person1=JSON.stringify(person);
console.log(person1);

//JSON TO JS
let jsobj=JSON.parse('{"pid":100,"name":"ravi"}')
console.log(jsobj);


//CONTACT API  BY   MAKING API REQUEST USING 'fetch'
function getPosts1(){
    //Asynchronous API request:
    fetch('https://jsonplaceholder.typicode.com/posts')//fetch method returns the promise & http response
    .then(res=>res.json()) 
    .then(posts=>console.log(posts))
    .catch(err=>console.log(err))
}
getPosts1()

//CONTACT API  BY   MAKING API REQUEST USING async & await
async function getPosts2(){
    //Asynchronous API request:
    try{
    let res=await fetch('https://jsonplaceholder.typicode.com/posts')//fetch method returns the promise & http response
    let data = await res.json();
    console.log(data)
    }
    catch(er){
        console.log(er);
    }
}
getPosts2()*/


//DOCUMENT OBJECT MODEL :-

//ACCESS ELEMENTS USING DOM
//Access head
let head=document.head;
console.log("Head is: ",head);

//Access body
let body=document.body;
console.log("Body is: ",body);

//Access other elements
let h1=document.querySelector('h1');
console.log(h1);

let fp=document.querySelector('.first-para')
console.log(fp)

let sh=document.querySelector('#second-heading')
console.log(sh)

//Access children from parent
let div=document.querySelector('div')
console.log(div.children)
console.log(div.children[0])
console.log(div.children[1])
console.log(div.children[2])

//Access parent from children
let parentOfDiv=div.parentNode;
console.log(parentOfDiv)


//ADDING INTERACTIVITY
h1.addEventListener('click',()=>{
    //change styling
        h1.style.color='white'
        h1.style.backgroundColor='black'
        h1.style.fontSize='2rem';

    //change content
        h1.textContent='Content is changed after clicking'
})
//events: click,mouseover=hover


//INCREMENT COUNTER EXAMPLE
let counter=document.querySelector('.counter');
let incBtn=document.querySelector('button')

incBtn.addEventListener('click',()=>{
    counter.textContent=Number(counter.textContent)+1; 
    console.log(counter)
})
//Number is the constructer that converts string into int.


//CREATE HTML ELEMENT
let h3element=document.createElement('h3')
//place content:
h3element.textContent='Hello'
console.log(h3element)
//add element to the DOM:
document.body.appendChild(h3element)
div.appendChild(h3element)

//DISPLAY ARRRAY ELEMENTS
/*let num=[10,20,30];

//get add element button
let addElement=document.querySelector(".add-element")
addElement.addEventListener("click",()=>{
    num.push(100);  displayArray()
});

function displayArray(){
for(let el of num){
    //create element
        let h4=document.createElement('h4');
    //add content
        h4.textContent=el;
    //add to DOM
        document.body.appendChild(h4)
}
}*/
let A=[10,20,30]
for( let i of A)
    {
        let h4=document.createElement('h4')
        h4.textContent=i
        document.body.appendChild(h4)
    }

    let add=document.querySelector('.add')
    add.addEventListener('click',()=>
    {
        A.push(100)
        let h4=document.createElement('h4')
        h4.textContent=Number(num.textContent)
        document.body.appendChild(h4)
    })