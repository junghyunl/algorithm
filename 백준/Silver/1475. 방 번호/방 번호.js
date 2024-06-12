const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

const n = input.length;
let numbers = new Array(10).fill(0);

for (let i = 0; i < n; i++) {
    numbers[input[i]]++;
}

numbers[6] = Math.ceil((numbers[6]+numbers[9])/2);
numbers[9] = 0;

console.log(Math.max(...numbers));