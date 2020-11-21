"use strict";

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
    if (num === 2) {
        // Check if value equals 2
        return true;
    } else if (num > 1) {
        // Check if value is greater than 1
        for (var i = 2; i < num; i++) {
            // Loop through num
            if (num % i !== 0) {
                // If num mod the index does not equal 0 return true
                return true;
            } else if (num === i * i) {
                // if num is equal to the index * the index return false
                return false;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

console.log(isPrime(121));
