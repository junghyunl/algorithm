const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin
function sum(a) {
    return a.split('+').map(Number).reduce((a,b) => a+b);
}

let result = input.split('-').map(a => sum(a));

console.log(result.reduce((a,b) => a-b));