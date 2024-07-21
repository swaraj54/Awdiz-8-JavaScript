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
// Array

// Q Given an array find count of numbers who are even.

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function findCountEvenFromArray(array) {
//   var count = 0;
//   for (var i = 0; i <= array.length - 1; i++) {
//     // console.log(i, array[i]);
//     if (array[i] % 2 == 0) {
//       count++;
//     }
//   }
//   //   console.log(count, "count");
//   return count;
// }

// const output = findCountEvenFromArray(array);
// console.log(output, "output");

// 1. Push -> add element to last index

// var students = ["rahul", "nehal", "ali"];
// students.push("rohit", "virat");
// students.push("adep");
// console.log(students, "students");

// 2. Pop ->  remove element from last index

// var students = ["rahul", "nehal", "ali"];
// students.pop();
// console.log(students, "student");

// 3. Shift -> remove element from first index

// var students = ["rahul", "nehal", "ali"];
// students.shift();
// console.log(students);

// 4. Unshift ->  add element to first index

// var students = ["rahul", "nehal", "ali"];
// students.unshift("Virat");
// console.log(students);

// 5. Slice -> its create updated array based on indexes.

// var students = ["rahul", "nehal", "ali", "amod", "adep"];
// console.log(students.slice());
// console.log(students.slice(1));
// console.log(students.slice(2, 3));

// console.log(students.slice(-3));
// console.log(students.slice(3, -1));

// 6. Splice

// var students = ["rahul", "nehal", "ali", "amod", "adep"];

// .splice(index , 0/1 , new element) -> its return nothing i.e its update current array
// 0 -> update
// 1 -> replace

// students.splice(3, 0, "Virat");

// students.splice(1, 2, "virat");

// students.splice(3, 1);

// console.log(students);


// Q Given an array of names find out index of target . 
var students = ["rahul", "nehal", "ali", "amod", "adep"];
var target = "adep"
// output  : 4