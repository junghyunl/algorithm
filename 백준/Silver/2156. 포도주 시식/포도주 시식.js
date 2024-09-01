const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const wine = input.slice(1).map(Number);
let totalWine = new Array(N).fill(0);
totalWine[0] = wine[0];
totalWine[1] = wine[0]+wine[1];
totalWine[2] = Math.max(wine[1]+wine[2], totalWine[0]+wine[2], totalWine[1]);

for (let i = 3; i < N; i++) {
    totalWine[i] = Math.max(totalWine[i-3]+wine[i-1]+wine[i], totalWine[i-2] + wine[i], totalWine[i-1]);
}

console.log(totalWine[N-1]);