const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const n = +input[0];
const arr = input[1].split(' ').map(Number);

let lArr = new Array(n).fill(1);
let rArr = new Array(n).fill(1);
let maxCnt = 0;

for (let i = 0; i < n; i++) {
    maxCnt = 0;
    for (let j = i-1; j >= 0; j--) {
        if (arr[j] >= arr[i]) continue;
        maxCnt = Math.max(maxCnt, lArr[j]);
    }
    lArr[i] = maxCnt + 1;
    maxCnt = 0;
    for (let j = n-i; j < n; j++) {
        if (arr[j] >= arr[n-i-1]) continue;
        maxCnt = Math.max(maxCnt, rArr[j]);
    }
    rArr[n-i-1] = maxCnt + 1;
}

let maxValue = 0;
for (let i = 0; i < n; i++) {
    maxValue = Math.max(maxValue, lArr[i] + rArr[i] -1)
}

console.log(maxValue);