let a=12
if (a==12 || a==20 ){
    console.log("equal")
}
else if(a==30){
    console.log("30")
}
else{
    console.log("not equal")
}

// switch (expression)
// {
//     case value 1:
//         statement
//         break
//         default
//          statement
// }


let day = 3
let dayname
switch (day){
    case 1:
        dayname ="sunday"
        break;
        case 2:
        dayname ="monday"
        break;
        case 3:
        dayname ="tuesday"
        break;
        case 4:
        dayname ="thursday"
        break ;
        case 5:
        dayname ="friday"
        break;
        case 6:
        dayname ="satday"
        break;
        default:
        dayname ="invalid"
        break;
}
console.log(dayname)

//loop
// for(initialise;condition;iteration){}
for(let i=0;i<5;i++){
    console.log(i)
}

//for/in
// for(ey in obj)
// 1 st example
const person ={
    name:"johon",
    age:21

}
let txt="";
for(let x in person){
    txt+=person[x] +" "
}
console.log(txt)

//2nd example
const num =[56,66,77,88]
let text=""

for(let x in num){
    text+=num[x] +"\n"
}
console.log(text)

//3 rd
var personn={
 firstName:"john",
 lastName:"joe"
}

for(var x in personn){
    console.log(personn[x])
}

//for of
// for(variable of iterable)
const cars =["bmw","safari"]
let te =""
for(let x of cars){
    te+=x +"\n"
}
console.log(te)

//2nd ex
let lang="js"
for(let x of lang){
    te+=x +"\n"
}
console.log(te)

// while
//while(condition){}
let count = 1
while (count<10){
    console.log(count)
    count+=2
}


// let fruits=["apple","banana"]
// let aa =0
// while(aa<fruits.length){
//     console.log(`${aa+1} .${fruits[aa]}`)
//     a++
// }



let texts = ""
let i= 0
do{
    texts+=i+"\n"
    i++
}
while(i<10)
console.log(texts)