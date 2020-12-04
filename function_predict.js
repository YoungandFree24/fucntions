
// Predict 1

//function greeting() {
//creates a function called greeting
//    return "Hello";
//returns the string "hello"
//    console.log("World");
//   //console logs the string 'world
//}
//end of function
// var word = greeting();
//assigns the variable word to greeting function
// console.log(word);
//console.log the word function

//output= hello

// function add(num1, num2){
//     //create's a function called add that takes in two paramenters
//     console.log("Summing Numbers!");
//     //console logs a string
//     console.log("num1 is: " + num1);
//     //console logs a string and num1 paramenter
//     console.log("num2 is: " + num2);
//     //console logs a string and num2 parameter
//     var sum = num1 + num2;
//     //sets the variable sum to num1 parameter plus num2 paramenter
//     return sum;
//     //returns sum and the true output of the function is sum
// }
// var result1 = add(3,5);
// //sets the variable result to add function with 3 & 5 as arguements
// var result2 = add(4,7);
// //sets the variable result to add function with 4 & 7 as arguements
// console.log(result1);
// //console logs result1
// console.log(result2);
// //console logs result2

// //output =
// // Summing Numbers!
// // num1 is: 3
// // num2 is: 5
// // Summing Numbers!
// // num1 is: 4
// // num2 is: 7
// // 8
// // 11


//Predict 3
function highFive(num) {
    //creates function highFive that takes in num as a paramenter
    for (var i = 0; i < num; i++) {
        //sets a for loop that starts at index 0, then says for every i (index 0), then increment by 1 to the next index
        if (i == 5) {
            //if i variable is equal to 5
            console.log("High Five!");
            //console log the string
        }
        // closes the if statement
        else {
            //else statement opens
            console.log(i);
            //console.log the i variable
        }
    }
}