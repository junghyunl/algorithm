const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const n = +input[0];
const numbers = input[1].split(' ').map(Number);
let arrLen = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[j] >= numbers[i]) continue;
        if (arrLen[j] >= arrLen[i]) arrLen[i] = arrLen[j] + 1;
    }
}

console.log(Math.max(...arrLen));