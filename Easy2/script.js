// "use strict";
// // Create a function that checks an array for prime numbers then inserts any pimes into a new array.

// // Only can be divided by the number itself and 1

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var index = 0; index < numbers.length; index++) {
//     if (numbers[index] === 1 && numbers[index] / numbers[index]) {
//         console.log(numbers[index]);
//     }
// }

function isPrime(num) {
    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            } else if (num === i * i) {
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
