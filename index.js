console.log("Hello I am Conditional tutorial")

let age2=16;
let grace=2
if ((age2-grace)>18){
   console.log("You can Drive")
}
else{
    console.log("You cannot drive")
 }

if (age2==0){
    console.log("Valid age");
}
else if(age2>10 || age2<15){
    console.log("but u r a kid");
}
else if(age2>=18){
    console.log("not kid");
}
else{
    console.log("not valid");
}

let a=4
let b=10
let c= a > b ? (a+b) : (a-b);
console.log (c)
let age1=23

if (age1>9 && age1<20){

console.log("Valid");
}
else{
    console.log("Invalid");
}

const grade="C";
switch (grade) {
    case "A":
        console.log("Great grade");
        break
    case "B":
        console.log("Good grade");
        break    
    case "C":
        console.log("Fair grade");
        break
    case "D":
        console.log("Bad grade");
        break
    default:
        console.log("Invalid Grade");
        
}
let num= 12;
if (num % 2 === 0 && num % 3 === 0){
  console.log(num + " is divisible by 2 and 3");
}
 else {
    console.log((num) + " is not divisible by 2 and 3.");
  }

  let num1= 10;
if (num1 % 2 === 0 || num1 % 3 === 0){
  console.log(num1 + " is divisible by 2 or 3");
}
 else {
    console.log((num1) + " is not divisible by 2 or 3.");
  }

let age = 18;
age > 17 ? (console.log ("you can drive")) : (console.log("you cannot drive")) ;

