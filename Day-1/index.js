// Datatypes ->

// Data -> information -> name email age etc  , awdiz awdiz@gmail.com 20

// function -> store ->  mulitple line code

// console.log(myname) // awdiz
// typeof("awdiz") // String
// typeof(20) // Number

// 1. String

console.log(typeof("awdiz"))

console.log(typeof('awdiz'))

console.log(typeof(`awdiz`))

// 2. Number

// 20, 2132, 232, 32.32, 131.121, 312, 32
console.log(typeof(2))

console.log(typeof("2"))

// 3. Boolean
// true false

console.log(typeof(true))
console.log(typeof(false))

// 4. undefined

// Varibles ( storage - cupboard ) - to store data, any type of data
// 1. var
// 2. let
// 3. const

// varibletype variblename = value/data ;







var username = "awdiz";
var userage = 10;
var useremail = "awdiz@gmail.com";
var userpassword = "awdiz@123";
var user;

console.log(username, userage, useremail, userpassword);
console.log(user , typeof(user));







var number1 = 23456;
var number2 = 98765;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);









var number = 10; // declare and assign
console.log(number);
number = 12; // re-assign
console.log(number);
var number = 14 ; // re declare
console.log(number);










let number = 10;
console.log(number)
number = 12;
console.log(number)
let number = 14;
console.log(number)






const number = 10;
console.log(number);
number = 12;
console.log(number);
const number = 14;
console.log(number)











//       reassign   redeclare       scope           hoisting
// var     ✅          ✅       global scope          ✅
// let     ✅          ❌       block scope           ❌
// const   ❌          ❌       block scope           ❌
//

// {} -> block / box





{
  var number = 10;
  let number2 = 12;
  console.log(number2);
  const number3 = 14;
}

console.log(number);











{
//   var number = 10;
//   let number = 10;
  const number = 10;
  {
    console.log(number);
  }
}
console.log(number);
