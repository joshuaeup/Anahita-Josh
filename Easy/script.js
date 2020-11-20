"use strict";

// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

var num = [2, 4, 7, 11, 15, 16];
var even = [];
var odd = [];

function operation(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2) {
            odd.push(num[i]);
        } else {
            even.push(num[i]);
        }
    }
}

operation(num);
console.log("Even " + even);
console.log("Odd " + odd);
