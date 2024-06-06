const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//  /dev/stdin
const [n, s] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i] - s);
}

function gcd(a, b) {
    if (a%b === 0) return b;
    return gcd(b, a%b);
}

for (let i = 0; i < n-1; i++) {
    if (arr[i] < arr[i+1]) [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    arr[i+1] = gcd(arr[i], arr[i+1]);
}

console.log(arr[arr.length-1]);