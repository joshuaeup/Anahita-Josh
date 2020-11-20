"use strict";

//Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel

var vowels = ["a", "e", "i", "o", "u"];

function vowelChecker(letter) {
    if (vowels.includes(letter)) {
        console.log("This is a vowel");
    } else if (letter === "y") {
        console.log("This is sometimes a vowel");
    } else {
        console.log("This is not a vowel");
    }
}

vowelChecker("b");
vowelChecker("o");

vowelChecker("z");

vowelChecker("y");
