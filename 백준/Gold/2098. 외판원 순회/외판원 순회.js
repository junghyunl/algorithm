const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const cost = input.slice(1).map(a => a.split(' ').map(a => +a === 0 ? Infinity : +a));
const dp = Array.from({length:N}, () => Array.from({length:N-1}, () => Array(2**(N-1)).fill(Infinity)));

for (let i = 0; i < N-1; i++) {
    dp[1][i][1<<i] = cost[N-1][i];
}
for (let i = 1; i < N-1; i++) {
    for (let j = 0; j < N-1; j++) {
        for (let k = 0; k < 2**(N-1); k++) {
            if (dp[i][j][k] === Infinity) continue;
            for (let l = 0; l < N-1; l++) {
                dp[i+1][l][k|1<<l] = Math.min(dp[i+1][l][k|1<<l], dp[i][j][k]+cost[j][l]);
            }
        }
    }
}
let ans = Infinity;
for (let i = 0; i < N-1; i++) {
     ans = Math.min(ans, dp[N-1][i][2**(N-1)-1] + cost[i][N-1]);
}
console.log(ans);