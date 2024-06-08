const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

const n = input.length;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let arr = new Array(26).fill(0);
for (let i = 0; i < n; i++) {
    arr[alphabet.indexOf(input[i])]++;
}

console.log(arr.join(' '));