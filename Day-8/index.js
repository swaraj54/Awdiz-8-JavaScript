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

// Q Given a string find is string palindrome or not .

function isPalindrome(string) {
    if(string.length === 1 ){
        return "Not a palindrome."
    }
    for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
    //   console.log(string[i] , i, string[string.length - 1 - i], string.length -1 - i);
        if(string[i] !== string[string.length - 1 - i]){
            // console.log("String is not palindrome")
            return 'String is not palindrome';
        }
        // i++
    }
    // console.log("String is palindrome.")
    return "String is palindrome";
  }
  console.log(isPalindrome("a"))
const output = isPalindrome("roatzaor");
console.log(output,"output");

// var string = "roataor"
// console.log(string[Math.floor((string.length - 1) / 2)])

// 0 == 7 , r == r
// 1 == 6 , o == o
// 2 == 5 , a == a
// 3 == 4

// left side incrementing
// right side decrementing


  console.log( 2 == 2)
  console.log( 2 != 2)
  console.log( 2 === 2) // check data and datatype
  console.log( 2 !== 2) // data and datatype must different 


// Array 

// var store = [ 1 , 2 , "shjgh" , true , [1,2] ]


// var name = "Awdiz" "institute/"


var numbers = [10, "Hello", 30, 40, 50, 60, 70, 80, "Hi"];
console.log(number)
console.log(number.length) // its calculates from 1..
console.log(number[0])
console.log(number[4])
console.log(number[number.length - 1])
function printArrayNumbers(numbers){
    for(var i = 0 ; i <= numbers.length - 1  ; i++){
        console.log(i, numbers[i] )
    }

}
printArrayNumbers(numbers)









var arrayOfNumbers = [1, 2, 3];
// Print addition of numbers who are odd  
function SumOfOddNumbersFromArray(array) {
    var addition = 0;
    for(var i = 0 ; i <= array.length - 1 ; i++){
        // console.log(array[i])
        if(array[i] % 2 == 1){
            addition = addition + array[i]; 
        }
    }
    console.log(addition)
}
SumOfOddNumbersFromArray(arrayOfNumbers)

