const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const t = Number(input[0]);

function gcd(a, b) {
    if (a%b === 0) return b;
    return gcd(b, a%b);
}

for (let i = 1; i <= t; i++) {
    let arr = input[i].split(' ').map(Number);
    const n = arr.shift();
    let total = 0;
    for (let j = 0; j < n-1; j++) {
        for (let k = j+1; k < n; k++) {
            total += gcd(arr[j], arr[k]);
        }
    }
    console.log(total);
}

