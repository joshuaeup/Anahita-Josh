"use strict";

//Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder.

const a = 336;
const b = 360;

function gdc_two_numbers(a, b) {
    let gcf;

    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcf = i;
        }
    }
    return gcf;
}

console.log(gdc_two_numbers(a, b));
