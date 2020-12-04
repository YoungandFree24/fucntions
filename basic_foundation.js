//1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

//desclare the function with a name
function counting() {
    //create am array
    arr = []
    //iterate through numbers 1 to 255 pushing each number to the new array
    for (var a = 0; a <= 255; a++) {
        arr.push(a);
    }
    console.log(arr);
    //return the output to the function
    return (a);
}
//call the function with the array
counting()

//2.
//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

//create a function for creating the even from 1 to 1000
function even() {
    //create a value for sum
    sum = 0
    //set a for loop
    for (var i = 0; i <= 1000; i++) {
        //set if statement for  even numbers
        if (i % 2 == 0) {
            // put the result in sum
            sum = sum + i
        }
    }//returns sum
    return (sum)
}
//console logs sum so we can see it

console.log(even())


//3 Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

//create a function
function counting_odd() {

    //declare variable called sum
    sum = 0
    // for every number from 1 to 5000
    for (a = 0; a <= 5000; a++) {
        //if number is != 0 then add it sum
        if (a % 2 != 0) {
            //return sum so the output of the function
            sum += a
        }
    }
    //console log the function
    return (sum)

}
console.log(counting_odd())

//4 Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

//create an array
//create a function
//create a variable called sum
//for every number in the array add it to sum
//return sum
//console log the function


function summary(nr) {
    sum = 0
    for (var i = 0; i < nr.length; i++) {
        sum = nr[i] + sum
    }
    return sum
}

//5 Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
//create an array
//create a function
//create a variable called sum
//for every number in the array add it to sum

//return sum
//console log the function

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,-5,-6,-2] max is 7)
function findMax(numArr) {
    var max = numArr[0]; // sets the maximum to the first value in the array
    for (var i = 0; i < numArr.length; i++) { // for loop to examine each value in the array
        // see if the next value is bigger than the maximum
        if (numArr[i] > max) {
            // if it is, make it the new max
            max = numArr[i];
        }
    }
    return max;
}

//6 Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
// create a function
// creates an average variable
// creates a sum variable
// for loop to examine every value in the array
// sum variable // array length = average
// return average
// console.log the function

function getting_avg(a) {
    sum = 0
    avg = 0 
    for ( i = 0; i<a.length; i++) {
        while (a.length > 0) {
            sum = a[i] + sum
        }
    }
    avg = sum / arr.length
    return avg
}

// 7 Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

//create function
//create an array and set it to an variable
// for every number 1 to 50
//if number is odd
//push the number to the array
//return the array

function odds(){
    var arr = []
    for (var a = 1; a < 50; a+=2){
        arr.push(a)
    }
    return arr
}
console.log(odds())




