

// // Q Given an array of names find out index of target . 
// var students = ["rahul", "nehal", "ali", "amod", "adep"];
// var target = "virat"
// // output  : 4


function findIndexOfString(array, target) {
    for (var i = 0; i <= array.length - 1; i++) {
        // console.log(i, array[i] , target), 
        if(array[i] == target){
            // console.log(i, array[i], target)
            return i;
        }
    }
    // console.log("Not found.")
    return "Not found"

}

const output = findIndexOfString(students, target)
console.log(output)


 






var todos = ["eat breakfast", "eat lunch", "eat dinner"];

function deleteTodo(todos,index) {
// console.log(index)
    todos.splice(index, 1)
    return todos;
}

const result = deleteTodo(todos,0)
console.log(result)














var todos = ["eat breakfast", "eat lunch", "eat dinner"];

function updateTodo(todos,index, newTodo) {
// console.log(index)
    todos.splice(index, 1, newTodo)
    return todos;
}

const result = updateTodo(todos,0, "eat edli")
console.log(result)











// give an array find two numbers whose addition equal to target .

// var array = [1,2,3,4,5,6,7];
// var target = 5;

// ouptput : 
// 1 4
// 2 3

// Nested for loop 
// for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 3; j++){
//         console.log(i,"i",j,"j")
//     }
// }




















