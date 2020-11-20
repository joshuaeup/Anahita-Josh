"use strict";

const str = "{hello world}";

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

function convert(str) {
    return str.split(""); // Split into array
}

function brackets(str) {
    for (var i = 0; i < combinations.length; i++) {
        if (
            str.includes(combinations[i].open) &&
            str.includes(combinations[i].close)
        ) {
            return true;
        }
    }
    return false;
}

console.log(brackets(convert(str)));
