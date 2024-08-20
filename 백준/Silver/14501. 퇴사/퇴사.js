const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const counsels = input.slice(1).map(a => a.split(' ').map(Number));
let revenue = new Array(N).fill(0);
for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (j + counsels[j][0] <= i) revenue[i] = Math.max(revenue[i], revenue[j]);
    }
    if (i + counsels[i][0] <= N) revenue[i] += counsels[i][1];
}

console.log(Math.max(...revenue));