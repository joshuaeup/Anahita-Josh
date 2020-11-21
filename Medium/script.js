"use strict";
// Array of vowels
var vowels = ["a", "e", "i", "o", "u"];

// Function the accepts letter as param then checks if it's a vowel
function vowelChecker(letter) {
    if (vowels.includes(letter.toLowerCase())) {
        // Check if vowels array contains letter param
        console.log("This is a vowel");
    } else if (letter.toLowerCase() === "y") {
        // Check if letter is equal to 'y'
        console.log("This is sometimes a vowel");
    } else {
        // else return not a vowel message
        console.log("This is not a vowel");
    }
}

// Method Calls
vowelChecker("b"); // This is not a vowel
vowelChecker("o"); // This is a vowel
vowelChecker("z"); // This is not a vowel
vowelChecker("Y"); // This is sometimes a vowel
