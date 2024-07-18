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

// Q . Sum of all numbers from range 10 - 40;

function sumOfAllNumbers(starting, ending) {
  var count = 0; // 10 21 33
  for (var i = starting; i <= ending; i++) {
    // console.log(i)
    // console.log(count, "count", i, "i");
    count = count + i;
    // i++
  }
  console.log("count :" ,count)
}

sumOfAllNumbers(10, 40);






g

// Q Calculate factorial of a number
// 5 * 4 * 3 * 2 * 1 => 120

function findFactorial(number){
    var count = 1; // 2 6
    for(var i = 2; i <= number; i++){
        // console.log(i)
        count = count * i;
        // i++ 4
    }
    console.log(count)
}

findFactorial(1)






// Q Given a string find is string palindrome or not .

function isPalindrome(string) {
  for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
    console.log(string[i]);
  }
}

isPalindrome("roataor");

// var string = "roataor"
// console.log(string[Math.floor((string.length - 1) / 2)])

// 0 == 6 , r == r
// 1 == 5 , o == 0
// 2 == 4 , a == a

// left side incrementing
// right side decrementing






var name = "rotor";
console.log(name.length -1 ); // its calculates letter from 1 .
console.log(name[9]) // its calculates letter from 0.
console.log(name[name.length - 1]);
console.log(Math.floor(name.length / 2));








var number =  536.3242;
console.log(Math.floor(number))
console.log(Math.ceil(number))
