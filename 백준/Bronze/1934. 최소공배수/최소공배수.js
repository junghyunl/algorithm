const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
let t = Number(input[0]);

function gcd(a,b) {
    if (a%b === 0) return b;
    return gcd(b,a%b);
}

for (let i = 1; i <= t; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    if (x<y) [x, y] = [y, x];
    console.log(x/gcd(x,y)*y);
}