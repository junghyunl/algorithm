const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin
const n = +input;
let pen = new Array(n+1);
pen[0] = 1;
pen[1] = 3;

for(let i = 2; i <= n; i++) {
    pen[i] = (2*pen[i-1] + pen[i-2])%9901;
}

console.log(pen[n]);