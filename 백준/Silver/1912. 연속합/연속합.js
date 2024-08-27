const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
let ans = 0;
let numbers = input[1].split(' ').map(Number);
let d = new Array(N);
d[0] = numbers[0];
for (let i = 1; i < N; i++) {
    d[i] = Math.max(numbers[i], numbers[i] + d[i - 1]);
}

console.log(Math.max(...d));