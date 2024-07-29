const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const t = +input[0];
const n = input.slice(1).map(Number);
let method = Array.from({length:100001}, () => Array(3).fill(0));
method[1][0] = 1;
method[2][1] = 1;
method[3][0] = 1;
method[3][1] = 1;
method[3][2] = 1;

for (let i = 4; i <= 100000; i++) {
    method[i][0] = (method[i-1][1] + method[i-1][2])%1000000009;
    method[i][1] = (method[i-2][0] + method[i-2][2])%1000000009;
    method[i][2] = (method[i-3][0] + method[i-3][1])%1000000009;
}

for (let i = 0; i < t; i++) {
    console.log((method[n[i]][0] + method[n[i]][1] + method[n[i]][2])%1000000009);
}