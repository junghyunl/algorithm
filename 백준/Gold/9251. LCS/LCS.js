const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [A, B] = [input[0].trim(), input[1].trim()];
const [n, m] = [A.length, B.length];
const dp = Array.from({length:n+1}, () => Array(m+1).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (A[i] === B[j]) dp[i+1][j+1] = dp[i][j]+1;
        else dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j]);
    }
}

console.log(dp[n][m]);