1. //Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5]

//create a function
//create an array
//iterate through array
//if array is a positive # change it to the string
//return array

function positive_numbers() {
    arr = []
    for (var i = 0; i = ; i++) {
        if (i % 2 == 0) {
            arr.push = "big"
        }
        else (arr.push(i))

    }
    return arr
}

function makeItBig(arr) {
    // iterate through the array
    for (var i = 0; i < arr.length; i++) {
        // compare the value to 0 to make sure it's positive
        if (arr[i] > 0) {
            // switch value to be 'big'
            arr[i] = "big";
        }
    }
    return arr;
}
// console.log(makeItBig([-1,3,5, 7,-5]));

//2.Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

//create a function
//create an array
//print the lowest # in the array usig console log
//return the highest value in the array using

function high_low(am) {
    arr = []
    for (var i = 0; i < am.length; i++)
        console.log(arr.min)
    return arr.max
}

function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        } else if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

// console.log(printLowReturnHigh([50,-1,20,12]));

//3 Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array

//// create a function
//create array
//iterate though array
//console log i index -1
//return (if index is odd first)

function print2ndToLastReturnOdd(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}

//4 //Double Vision - Given an array (similar to saying 'takes in an array'), create a function 
// that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

//create  a dunction
//create 2 arrays
//iterate through 1 array
// muiltily the each index in the first array by iteself and set that value to the 2nd array
//return new array

function doubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
    //5 Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array. 
    // Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.


    //create a function
    //create 2 arrays
    //iterate through array
    //last number in array if positive add to new array
    //return new array
    function countPositives(arr) {
        var positives = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                positives++;
            }
        }
        arr[arr.length - 1] = positives;
        return arr;
    }

    //6 Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

    //create a function
    //create 2  arrays
    //if last 3 indexes are % 3 == 0, add it to new array
    //return new array
    function evensOdds(arr) {
        var odds = 0;
        var evens = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                odds++;
                evens = 0;
            } else {
                evens++;
                odds = 0;
            }
            if (odds == 3) {
                console.log("That's odd!");
                odds = 0;
            } else if (evens == 3) {
                console.log("Even more so!");
                evens = 0;
            }
        }
    }
    // evensOdds([1,1,1,2,2,1,1,1])

    //7 Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

    //create an array
    // iterate through array with arr+2
    //console log arr and return it
    function incrementSeconds(arr) {
        for (var i = 1; i < arr.length; i += 2) {
            arr[i] = arr[i] + 1;
        }
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
        return arr;
    }
