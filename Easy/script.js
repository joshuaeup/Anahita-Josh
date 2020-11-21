"use strict";

// Variable Declarations
var nums = [2, 4, 7, 11, 15, 16];
var even = [];
var odd = [];

// Function to check if value is even or odd
const operation = (nums) => {
    // Loop through entire array then run ternary operator to determine which array to push to
    nums.map(function (current) {
        current % 2 ? odd.push(current) : even.push(current);
    });
};

// Method Call
operation(nums);
console.log("Even " + even);
console.log("Odd " + odd);
