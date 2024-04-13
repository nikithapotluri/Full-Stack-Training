//INTRO TO GLOBAL , FUNCTION & BLOCK SCOPES
/*//global scope
let a=10;
function test(){
    console.log(a)
    //function scope
    let b=20;
    function inner(){
        console.log(b)
    }
    if(true){
        //block scope
        let c=30;
        console.log(a)
    }
}
test()
console.log(a)
let ar=[]




let x=12;               //global scope
function test2(){
    x=30;               //function scope
}*/



//HOW TO CALL AN INNER FUNCTION
/*let a=10;                           //global
function getValue(val){
    let b=val;                      //function
    return function findSum(){
        let s=a+b; return s;        //inner function
    }
}
let res=getValue(20)
console.log("Sum:",res())
//(or)
let sum=res()
console.log("Sum",sum)*/



//HOISTING & TEMPORAL DEAD ZONE
/*console.log("a is:",a)  //no declaration
console.log("b is:",b)  //no declaration
var a=10;               //if we use 'let' , then error will be seen as it is not declared before printing.
var b='Hello';
//Here is what JS engine does:
var a,b;
console.log("a is:",a)
console.log("b is:",b)
a=10;
b='Hello'
//This is known as Hoisting....Moving declarations to the beginning is called Hoisting.
//Variables declared with var will be hoisted
//Variables declared with let will not be hoisted. So, let is safe & secure.

console.log(c) //Temporal Dead Zone
let c=10;      //let is similar to const*/



//NON-PRIMITIVES

//ARRAY
/*let names=['ravi','shankar']
console.log(names[0])
console.log(names[1])
console.log(names[3])
let elements=[10,20,30,40,50];
let s=0;
for(let i=0; i<elements.length; i++)
    s+=elements[i]
console.log("Sum:",s)
//DYNAMIC OPERATIONS OF ARRAY-
 //1.Insert
    names.unshift('Ezolo','Wife')    //begin
    console.log(names)
    names.push('Vikas')             //at end
    names.splice(1,0,'Nags')        //in any position.
    console.log(names)
    names.splice(2,2,'Snake')
    console.log(names)
 //2.Delete
    names.shift()
    console.log(names)
    names.pop()
    console.log(names)
    names.splice(1,1)
    console.log(names)
 //3.Modify
    names.splice(1,1,"Heloo")
    console.log(names)*/

//OBJECT
/*let person={
    id: 100,
    name: 'ravi'
}
console.log(person.id)
for(let i in person){
    console.log(i)
    console.log(person[i])
}
 //Insert
    person.city='Hyd'   //new key 'city' is added
    console.log(person)
 //Delete
    delete person.id;
    console.log(person)
 //Update
    person.id='kiran'
    console.log(person)*/

//COMPLEX OBJECT
/*let student={
    sno:100,
    name:'bhanu',
    city:'vijayawada',
    marks:[90,89,59],

    address:{
        plot:302,
        street:'benz circle'
    },

    getAvg:function(){
        console.log("S.No. is :",this.sno)
    },

    review:[{user:'fresher', comment:'hire'},
            {user:'exp', comment:'dont hire'}
    ]
}
console.log(student.marks)
console.log(student.address)
student.getAvg()
console.log(student.review)*/




//CALL BACK FUNCTION
/*function test1(){
    console.log("Test 1 called")
}
function test2(x){
    x()
}
test2(test1)*/





//ADVANCED ARRAYS
/*let arr=[9,-23,78,65,97,12];

//selection(filter)
const fifty=arr.filter(i=>i>50 && i<90);
console.log(fifty)
//(or)
let res=arr.filter(function(element){
    return element>50;
})
console.log(res)

//modify(map)
let res2=arr.map(i=>i+10)
console.log(res2)

let res3=arr.map(i=>{
    if(i%2==0) return i+10;
    else return i+20;
})
console.log(res3)

//iterate(forEach)
arr.forEach((element,index)=>{
    console.log("Element: ",element,' at index :',index)
})

//search 20
let res4=arr.find((element)=>element===20)
console.log(res4)

//search for index
let res5=arr.findIndex((element)=>element===20)
console.log(res5)

//reduce
let res6=arr.reduce((accumulator,element)=>accumulator+element)
console.log(res6)

//find small element
let res7=arr.reduce((acc,ele)=>acc<ele?acc:ele)
console.log(res7)

let emp = [
    { eno: 100, name: 'ravi', age: 21, sal: 2000 },
    { eno: 200, name: 'bhanu', age: 25, sal: 5000 },
    { eno: 300, name: 'vikas', age: 30, sal: 30000 }
];

// Find youngest employee
let youngestEmp = emp.reduce((acc, cur) => acc.age < cur.age ? acc : cur);
console.log("Youngest Employee:", youngestEmp);

// Increment salary by 5000 for each employee
emp.forEach(emp => emp.sal += 5000);

// Find employees whose age is between 15 and 25
let youngEmployees = emp.filter(emp => emp.age >= 15 && emp.age <= 25);
console.log("Employees aged between 15 and 25:", youngEmployees);*/





//ADVANCED OPERATIONS ON OBJECTS
/*let testobj={
    a:10, b:20, c:30
}
//get values
let v=Object.values(testobj)
console.log(v)

Object.freeze(testobj)

testobj.d=40;
console.log(testobj)

let copy=Object.assign({},testobj)
console.log(copy)

let obj1={x:10}
let obj2={y:20}
let merged=Object.assign(obj1,obj2)
console.log(merged)
console.log(obj1)*/

//Object.create(prototype) ...create object using prototype

//Object Literal
//let person={    pid:100, name:'ravi'    }

//Class
class Student{
    constructor(sno,name){
        this.sno=sno;   this.name=name;
    }
    getStudent(){
        console.log("Sno :",this.sno)
        console.log("Name :",this.name)
    }
}
let std1=new Student(1,'Manohar')
let std2=new Student(2,'Vikas')
console.log(std1)
std1.getStudent()





//PROTOTYPE...sharing of common properties
/*let stu={
    college:'pvp',
    city:'vij'
}
let std1={
    so:100, name:'ravi'
}
let std2={
    sno:200, name:'manas'
}
Object.setPrototypeOf(std1,stu)
console.log(std1.college)*/


