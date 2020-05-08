//Lesson 1
1.
var : declare variable.
const : declare variable with constant values.
2.
var is globally scope or function scope.
let is block scope.
var which is initialized as “undefined".
let is not initialized.
var variables can be re-declared and updated.
let can be update but not re-declared.
When use let, you don't have to bother if you have used a name for variable before as a variable exists only within its scope, then the problem discussed earlier that occurs with var doesn’t occur.
3.
let is declare variable.
const is declare variable with constant values.
let can be updated but not re-declared.
const cannot be updated or re-declared.
let can be declared without being initialized.
const must be initialized during declared.
4.
Use let when variable change.
Use const when variable never change.
There’s no other use cases, we never need to use var again.

//Lesson 2
1. Boolean is a primitive data type commonly used in computer programming languages.
2. Results in Boolean is:   True/False

//LESSON 3
//a
let number
for(number = 0; number < 7; number++){
    console.log(Number(number))
}

//b
let i = prompt("Nhập vào 1 số cutee đi nàooo!")
let number = Number(i)
for(i = 0; i < number; i++){
    console.log(Number(i))
}

//c
let i = prompt("Nhập vào 1 số cutee đi nào!")
let number = Number(i)
for(i = 3; i < number; i++){
    console.log(Number(i))
}

//d
let c = prompt("Enter c")
let n = prompt("Enter n")
for(let i = c; i < n; i++){
    console.log(Number(i))
}

//e
let c = Number(prompt("Enter c"))
let n = Number(prompt("Enter n"))
for(let i = c; i < n; i += 3){
    console.log(Number(i))
}

//f
let c = Number(prompt("Enter c"))
let n = Number(prompt("Enter n"))
let s = Number(prompt("Enter s"))
for(let i = c; i < n; i += s){
    console.log(Number(i))
}

//LESSON 4 
let n = Number(prompt("Enter a number"))
let result = 1
for(let i = 1; i <= n; i++){
    result = result*i
}
alert(`The factorial of ${result}`)

//LESSON 5
let age = Number(prompt("How are you?"))
if(age < 14){
    alert(`You are not old enough to view this content!`)
}else if(age >= 14){
    alert(`Enjoy!`)
}

//LESSON 6
let i = Number(prompt("Enter a number"))
let number = 9
if(i < number){
    alert(`Lower half of 9`)
}else if(i > number){
    alert(`Higher half of 9`)
}

//LESSON 7
let x = Number(prompt("Enter a number"))
let n = Number(prompt("Enter a number"))
if(x > n){
    alert(`${x} is higher half of ${n}`)
}else if(x < n){
    alert(`${x} is lower half of ${n}`)
}

//LESSON 8
let number = Number(prompt("Enter a number"))
if(number%2 == 0){
    alert(`${number} is an even number`)
}else if(number%2 != 0){
    alert(`${number} is an odd number`)
}

//LESSON 9
//a
let low
let high
let sum = 6
for(low = 0; low < (sum/2); low++){
   console.log("L")
}
for(high = 0; high < (sum-low); high++){
   console.log("H")
}

//b 
let low
let high
let sum = Number(prompt("Enter a number"))
for(low = 0; low < (sum/2); low++){
   console.log("L")
}
for(high = 0; high < (sum-low); high++){
   console.log("H")
}

//c
//d Em không giải ra ạ :((

//LESSON 10
let weight = Number(prompt("Your weight in kg?"))
let height = Number(prompt("Your height in cm?"))
let number = height*100
let BMI = weight/(number*number) 
BMI.toFixed(2)
alert(`Your BMI is ${BMI}`)
if(BMI < 16){
    alert(`You are severely underweight`)
}else if(16 <= BMI < 18.5){
    alert(`You are underweight`)
}else if(18 <= BMI < 25){
    alert(`You are normal`)
}else if(25 <= BMI < 30){
    alert(`You are overweight`)
}else if(BMI >= 30){
    alert(`You are obese`)
}

//LESSON 11
//a
for(let i = 0; i < 4; i++){
    fd(100)
    rt(90)
}

//b
for(let i = 0; i < 3; i++){
    fd(100)
    rt(120)
}

//c
for(let i = 0; i < 5; i++){
    fd(100)
    rt(72)
}

//d
for(let i = 0; i < 6; i++){
    fd(100)
    rt(60)
}

//LESSON 12
//LESSON 13 Em không giải ra ạ :((


//Additional Exercises
//a
let username = 'c4e'
let password = 'codethechange'
let n = prompt("Enter your username")
let p = prompt("Enter your password")
if(n == username && n == password){
    alert("Successful login")
}else if(n == username || n == password){
    alert("Your username or password is incorrect")
}

//b 
let username = 'c4e'
let password = 'codethechange'
let n = prompt("Enter your username")
let p = prompt("Enter your password")
if(n == username && n == password){
    alert("Successful login")
}else if(n == username || n == password){
    alert("Your username or password is incorrect")
    let n = prompt("Enter your username")
    let p = prompt("Enter your password")
    if(n == username && n == password){
        alert("Successful login")
    }else if(n == username || n == password){
        alert("Your username or password is incorrect")
        let n = prompt("Enter your username")
        let p = prompt("Enter your password")
          if(n == username && n == password){
              alert("Successful login")
        } else if(n == username || n == password){
              alert("Your username or password is incorrect")
        }
    }
}alert(`Sorry!`)
