const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
//  /dev/stdin

let t = input[0];
let maxInput = Math.max(...input.slice(1));
let d = [0, 1, 2, 4].concat(new Array(maxInput));

for (let i = 4; i <= maxInput; i++) {
    d[i] = (d[i-1]+d[i-2]+d[i-3])%1000000009;
}
for (let i = 1; i <= t; i++) {
    console.log(d[input[i]]);
}