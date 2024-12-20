let a = 10;
console.log(typeof a )
let name = "ammu"

var g;
console.log(typeof g)

//object
let person = {
    name: "ammu",
    age: 22,
    place:"TVM",
    address:{
        street:"tvm"
    }
}
console.log(person)
console.log(person.address.street)

let car = {
    name:"safari",
    model:"tata",
    color:"red"
}
//nested object
//obj create using new
var student = new Object();
    student.name="john"
    student.age=13
console.log(student.name+"is")
console.log(`${student.name} is ${student.age} years young`)

//arrays
let fruits=["apple","grapes",12]
console.log(fruits.indexOf("apple"))
console.log(fruits[0])
console.log(fruits.length) // length is a eyword
fruits[2] = "grapes" // if i now the len
console.log(fruits)
fruits.push("banana")
console.log(fruits)// leng is sure ,add element to array
fruits.unshift("blue")
console.log(fruits) // add front
fruits.pop()
console.log(fruits) 
fruits.shift()
console.log(fruits)

// array of object
var class1 =[{name:"ammu",age:"12"},
    {name:"ammu1",age:"21"}]
console.log(class1[1].name)

//function
function greet(){
    console.log("hello")
}
greet()

function display(fname){
    console.log(`welcome ${fname} to func`)
}
display("tiya")

function display(fname,lname){
    console.log(`welcome ${fname} ${lname} to func`)
}
display("ammu","abhaya")

// function add(a,b){
//     console.log(a+b)
// }
// add(5,2)

function add1(a,b){
    return a+b
}
var n= add1(5,2)
console.log(n)

function mul(a,b){
    return a*b
}
var n= mul(5,2)
console.log(n)

// conditional statements
let examMar = 10
if (examMar>10) {
    console.log("you have passed")
}
else if (examMar==10){
    console.log("your mar")
} 
else {
    console.log("you have failed")
}

let number = -10
if (number>0) {
    console.log("positive")
}
else if (number==0){
    console.log("Zero")
} 
else {
    console.log(" negative")
}

// let username ="admin"
// let password = 12345
// if(username=="admin")
// {
//     if(password==="12345"){
//     console.log("login successful")}
// }
// else{
//     console.log("incorrect password")
// }
// else{
//     console.log("user not found")
// }




