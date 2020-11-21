"use strict";

// Variables
const a = 336;
const b = 360;

function gdc_two_numbers(a, b) {
    // gcf variable
    let gcf;

    // Loop until max variable value is reached
    for (var i = 1; i <= a && i <= b; i++) {
        // If a % index === 0 or if b % index === 0
        if (a % i === 0 && b % i === 0) {
            // Store value in gcf variable
            gcf = i;
        }
    }
    // return gcf
    return gcf;
}

console.log(gdc_two_numbers(a, b));
