const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);
let arrLen = new Array(n);
arrLen[n-1] = 1;

for (let i = n-2; i >= 0; i--) {
    let maxValue = 0;
    for (let j = i+1; j < n; j++) {
        if(arr[j] >= arr[i]) continue;
        maxValue = Math.max(maxValue, arrLen[j]);
    }
    arrLen[i] = maxValue + 1;
}

console.log(Math.max(...arrLen));