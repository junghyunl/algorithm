const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin
const n = +input;

let d = new Array(n+1).fill(5);

for (let i = Math.floor(n**0.5); i >= 1; i--) {
    d[i**2] = 1;
}

for (let i = Math.floor(n**0.5); i >= 1; i--) {
    for (let j = 1; j <= n - i**2; j++) {
        if (d[j] > 0) {
            d[j + i**2] = Math.min(d[j] + 1, d[j + i**2]);
        }
    }
}
console.log(d[n]);