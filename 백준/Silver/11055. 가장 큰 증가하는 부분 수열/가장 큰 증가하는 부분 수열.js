const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
let sum = new Array(N).fill(0);
sum[0] = numbers[0];

for (let i = 1; i < N; i++) {
    let maxSum = 0;
    for (let j = 0; j < i; j++) {
        if (numbers[j] < numbers[i] && sum[j] > maxSum) {
            maxSum = sum[j];
        }
    }
    sum[i] = numbers[i] + maxSum;
}

console.log(Math.max(...sum));