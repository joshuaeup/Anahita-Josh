"use strict";

// Variables
var string1 = "So dark the con of man";
var string2 = "Madonna of the Rocks";

// Function to determine anagram status
function check(arr1, arr2) {
    // Loops through entire array
    for (var index = 0; index < arr1.length; index++) {
        // Check if value does not equal each other
        if (arr1[index] !== arr2[index]) {
            return false;
        }
    }
    return true;
}

// Function to convert string to lower case, remove space in between, split into their own, sort the array
function convert(str) {
    return str
        .toLowerCase() // Converting to lower case
        .replace(/\s+/g, "") // Remove Space
        .split("") // Split into array
        .sort(); // Sort a-z
}

// Create new parsed variables
var parsedString1 = convert(string1);
var parsedString2 = convert(string2);

// Log
console.log(check(parsedString1, parsedString2)); // Prints True
