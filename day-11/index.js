/ give an array find two numbers whose addition equal to target .


// ouptput : 
// 1 4
// 2 3

var array = [1,2,3,4,5,2,3,1,3,2,5,3,2,1,4,54,2,2,1]; 
var target = 5;
// 1 + 2
// 2 + 3
// 3 + 4
// 4 + 5
// 1 + 2
// 1 + 3
// 1 + 4
// 1 + 5
// 2 + 3
// 2 + 4
// 2 + 5
// 3 + 4 
// 3 + 5
// 4 + 5


function findPairs(array,target ){
    // console.log(array,target)
    // for(var i = 0; i < array.length; i++){
    //     if(array[i] +  array[i + 1] == target){
    //         console.log(array[i], array[i + 1])
    //     }
    // }
    for(var i = 0; i <= array.length - 1 ; i++){
        for(var j = i + 1 ; j <= array.length - 1; j++){
            // console.log(array[i],i, array[j],j)
            if(array[i] + array[j] === target){
                console.log(array[i], array[j])
                // return [i, j]
            }
        }
    }
}
console.log(findPairs(array, target))

















const array = [1,2,43,54,5];
const output = array.find(ele => ele > 10)
console.log(output,"output")











const students1  = ["virat","rahul"]
const students2 = ["rohit","ali"]
const output = students2.concat(students1)
console.log(output)












const students = ["virat","rahul","rohit","ali"]
const output = students.filter((student)=> student.length <= 3 )
console.log(output)








// Use driving license function here... use numbers as age
const students = ["virat","rahul","rohit","ali"]
students.forEach((student)=> console.log(student) )







const students = ["virat","rahul","rohit","ali", 2]
const output  = students.includes(2);
console.log(output) // true / false 











const students = ["virat","rahul","rohit","ali", 2]
console.log(students.indexOf("rishabh"))

// indec or -1 