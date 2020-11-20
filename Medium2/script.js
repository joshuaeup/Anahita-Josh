"use strict";

// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.

// Create 2 strings that holds values provided

// Create 2 empty arrays

function convert(str) {
    return str
        .toLowerCase() // Converting to lower case
        .replace(/\s+/g, "") // Remove Space
        .split("") // Split into array
        .sort(); // Sort a-z
}

var string1 = "So dark the con of man";

var string2 = "Madonna of the Rocks";

var parsedString1 = convert(string1);
var parsedString2 = convert(string2);

function check(arr1, arr2) {
    for (var index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) {
            return false;
        }
    }

    return true;
}

console.log(check(parsedString1, parsedString2));
