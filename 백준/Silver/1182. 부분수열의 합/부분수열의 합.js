const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let answer = 0;

function bt(idx, total) {
    if (total === s) answer++;
    for (let i = idx; i < n; i++) {
        bt(i+1, total+arr[i]);
    }
}

bt(0, 0);
if (s === 0) answer--;
console.log(answer);