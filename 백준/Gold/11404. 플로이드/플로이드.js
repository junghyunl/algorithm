const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const M = +input[1];
const costs = Array.from({length:N}, () => Array(N).fill(Infinity));

for (let i = 0; i < M; i++) {
    const [from, to, cost] = input[2+i].split(' ').map(Number);
    costs[from-1][to-1] = Math.min(costs[from-1][to-1], cost);
}

for (let i = 0; i < N; i++) {
    costs[i][i] = 0;
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            costs[j][k] = Math.min(costs[j][k], costs[j][i]+costs[i][k]);
        }
    }
}

let ans = '';
for (let i = 0; i < N; i++) {
    ans += costs[i].join(' ').replaceAll("Infinity", "0") + '\n';
}
console.log(ans);