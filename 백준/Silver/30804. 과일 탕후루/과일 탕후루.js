const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const n = +input[0];
const tanghulu = input[1].split(' ').map(Number);
let fruit = new Array(10).fill(0);
fruit[tanghulu[0]] = 1;

let m = 0;
for (let i = 1; i < n-1; i++) {
    if (tanghulu[i] !== tanghulu[0]) {
        m = i;
        fruit[tanghulu[m]] = 1;
        break;
    }
}

let result = 0;
let left = m;
let start = 0;
for (let i = m+1; i < n; i++) {
    if (tanghulu[i] !== tanghulu[i-1]) {
        if (fruit[tanghulu[i]] === 0) {
            fruit.fill(0);
            fruit[tanghulu[i]] = 1;
            fruit[tanghulu[i-1]] = 1;
            result = Math.max(result, i-start);
            start = left;
        }
        left = i;
    }
}
result = Math.max(result, n-start);
console.log(result === 0 ? n : result);