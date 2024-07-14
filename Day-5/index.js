// Datatype
// String
// number
// boolean
// undefined
// varible
// var
// let
// const
// Hoisting
// Comparision operators
// < > <= >= == ===
// Conditional Statement
// if else
// switch
// logical operators
// && ||
// function
// traditional function -> function functionName() {}
// arrow function
// Template literals

// Q. Check is user valid for DL, on basis of below conditions,

// Tip - use logiccal operator to put two condition at same Time .

// 1. if -> 2 condition -> User age must be greater than 18 and lesser than and equal 60. -> eligible for DL.
// 2. else if -> 2 condition -> equal to and lesser than 17 or greater than 60. -> not eligible for DL
// 3. else . equal to 18 -> eligible for LL.

function checkIsUserValidForDrivingLicense(age) {
  console.log(age, "age");
  if (age > 18 && age <=  60) {
    console.log("You are eligible for DL.");
  } else if (age <= 17 || age > 60){
    console.log("You are not eligible for DL.")
  } else {
    console.log("You are eligible for LL.")
  }
}

checkIsUserValidForDrivingLicense(18);

// function addition(props){
//     code
// }

// // Arrow function

// const addition = (props) => {
//     code
// }

const isNumberEvenOrOdd = (number) => {
  if (number % 2 == 0) {
    console.log(`Given number ${number} is even.`);
  } else {
    console.log(`Given number ${number} is odd.`);
  }
};

isNumberEvenOrOdd(15);

// 15

//       ___ 8 -> quotient
//    2 /  16
//         16
//          0 ->  remainder

// console.log(31383998916 / 2) // -> / -> quotient
// console.log(31383998919 % 2) // % -> remainder

// Template literals

// var age = 25;
// var name = "Virat";

// console.log(`Im ${name} and my age is ${age}.`);

// Loops
// for
// while

// for loop

// for(starting ; ending ; sequence ){
//     code
// }

for (var i = 1; i <= 10; i++) {
  console.log(i); // 1 2 3 ... 10
  // i++ / 1 => 2 => 3 => 4 .. 10 => 11
}

Q .
Print numbers from 20 - 40.
Print number from 1 - 100, 1, 3, 5, 7, 9 
Print numbers from 50 -150, 50, 60, 70, 80, ... 150


// var i = 10;
// i = i + 1 // 10 + 1 // 11
// i++
// i++
// i++

// i += 1

// i = i - 1;
// i--
// i -= 5

// console.log(i);

// Q. Print numbers from 1 - 1000.

// function PrintNumber() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   console.log(5);
//   console.log(6);
// }

// PrintNumber();
