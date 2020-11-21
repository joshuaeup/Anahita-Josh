"use strict";
// String Variable
const str = "{hello world}";

// Array of objects array
const combinations = [
    {
        open: "{",
        close: "}",
    },
    {
        open: "[",
        close: "]",
    },
    {
        open: "(",
        close: ")",
    },
];

// Function to split string into array
function convert(str) {
    return str.split(""); // Split into array
}

// Function to check if bracket combination matches
function brackets(str) {
    // Loop through entire combinations array
    for (var i = 0; i < combinations.length; i++) {
        // If the string includes the open bracket at a given index it must include the corresponding close index
        if (
            str.includes(combinations[i].open) &&
            str.includes(combinations[i].close)
        ) {
            return true;
        }
    }
    return false;
}

// Print boolean with parsed str
console.log(brackets(convert(str)));
