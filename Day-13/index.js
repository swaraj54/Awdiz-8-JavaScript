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
// Array -> to store multiple data
// Object -> to store multiple data
// for loop
// While loop

// var string = "He ll o wo rld";

// h : 1
// e : 1
// l : 3
// o : 2
// w : 1
// r : 1
// d : 1
// function findDuplicates(string) {
//   var output = {};
//   console.log(string, "string");
//   for (var i = 0; i <= string.length - 1; i++) {
//     // console.log(string[i]);
//     // console.log(output[string[i]]);

//     // if (string[i] == " ") {
//     //   continue;
//     // }
//     if (string[i] != " ") {
//       if (output[string[i]] == undefined) {
//         output[string[i]] = 1;
//       } else {
//         output[string[i]]++;
//       }
//     }
//   }
//   console.log(output);
// }

// findDuplicates(string);

// While Loop

//     starting
// while(ending -> condition -> true / false){
//     sequence
// }

// Q Print numbers from 1 to given number by using while loop.

// var number = 10;

// function print(number) {
//   var count = 6; // starting
//   while (count <= number) { //  6 <=  5 -> false
//     // ending
//     console.log(count); // 1 2 3 4 5
//     count++;
//   }
// }

// print(number);

// for(staring ; ending ; sequence){

// }

// starting
// while(ending){
//     sequence
// }

// Q Give an number, do addition of 1 to number by using while loop .

var number = 4;

// 1 + 2 + 3 = 6

function additionOfNumbers(number) {
  var i = 1;
  var sum = 0;
  while (i <= number) {
    console.log(i);
    sum += i;
    i++;
  }
  console.log(sum);
}
additionOfNumbers(number);




// Q Give an aray, do addition of numbers by using while loop .

var array = [2, 4, 5, 6, 7, 8, 3, 2];
// ouput : 120


// Q Give an aray, find only odd numbers by using while loop .

var array = [2, 4, 5, 6, 7, 8, 3, 2];
// ouput
// 5
// 7
// 3



// Q Give an aray, find count of even numbers by using while loop .

var array = [2, 4, 5, 6, 7, 8, 3, 2];

// ouput : 5