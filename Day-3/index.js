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
// Conditional Statement
// if else
// switch
// logical operators
// && ||
 

// eg. Driving license

var age = 18; // 17 // 20

if (age < 18) {
  console.log("You are not eligible for Driving license.");
} else if (age == 18) {
  console.log("You are eligible for Learning license.");
} else {
  console.log("You are eligible for Driving license.");
}

// 1. if else
// 2. Switch

// switch(data){
//     case 1 :
//         log()
//         break;
//     case 2 :
//         log()
//         break;
//     case 3 :
//         log()
//         break;
//     default:
//         log()
// }

var userSelectedFruit = "JBHBKNJHB";

switch (userSelectedFruit) {
  case "Apple":
    console.log("You are selected Apple.");
    break;
  case "Grape":
    console.log("You are selected Grape.");
    break;
  case "Watermelon":
    console.log("You are selected Watermelon.");
    break;
  case "Banana":
    console.log("You are selected Banana.");
    break;
  default:
    console.log("Seletced fruit is not available.");
}

// Logical Operators

// && -> and  operator
// if all conditions are true then only it'll return true
// if any single condition is false then it'll return false
// || -> or operator
// if any single condition is true then it'll return true
// if all condition are false then only it'll return  false

// var student1 = 100;
// var student2 = 50;
// var student3 = 20;

console.log(student1 >= 50 && student2 >= 50 && student3 >= 50);

// console.log(100 < 50 || 50 < 50 || 20 > 50);

// if (student1 >= 50) {
//   console.log("More than 50 marks.");
// }

// if(student2 >= 50){
//     console.log("Student2 having more than 50 marks.")
// }
// if(student3 >= 50){
//     console.log("Student3 having more than 50 marks.")
// }



console.log(1 > 2 && 2 < 1 && 2 > 2);
