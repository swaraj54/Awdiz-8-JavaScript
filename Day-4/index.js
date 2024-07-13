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

// varible -> to store data
// function -> to store multiple lines of code + can execute

// function AnyName(props / datas){
//     multiple lines of code
// }

// AnyName();

// function addition() {
//   console.log(1 + 2, "from addition");
// }

// addition();

// function subtraction() {
//   console.log(2 - 1, "from subtraction");
// }

// subtraction();

// function multiplication(number1, number2, number3, number4) {
//   console.log(number1, number2, number3, number4);
// }

// multiplication(1, 2, 3, 4);

function checkIsUserValidForDrivingLicense(age) {
//   console.log(age, "age");
  if (age == 18) {
    console.log("You are not eligible for DL, you are eligible for LL.");
  } else if (age > 18) {
    console.log("You are eligible for DL.");
  } else {
    console.log("You are under age and not eligible for DL/LL.")
  }
}

checkIsUserValidForDrivingLicense(100);






Q. Check is user valid for DL, on basis of below conditions,

Tip - use logiccal operator to put two condition at same Time .

1. if -> 2 condition -> User age must be greater than 18 and lesser than and equal 60. -> eligible for DL. 
2. else if -> 2 condition -> equal to and lesser than 17 or greater than 60. -> not eligible for DL
3. else . equal to 18 -> eligible for LL.
