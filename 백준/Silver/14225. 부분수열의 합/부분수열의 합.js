const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);
const sum = new Set();

function bt(idx, total) {
    for (let i = idx; i < n; i++) {
        bt(i+1, total+arr[i]);
        sum.add(total+arr[i]);
    }
}

bt(0, 0);

let answer = 1;
while (true) {
    if(!sum.has(answer)) {
        console.log(answer);
        break;
    }
    answer++;
}