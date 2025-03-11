const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const cost = input.slice(1).map((line) => line.split(' ').map(Number));
const dp = Array.from({ length: N }, () => Array(3).fill(0));

const ans = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    dp[0][j] = cost[0][j];
  }

  dp[0][i] = Infinity;

  for (let j = 1; j < N; j++) {
    dp[j][0] = cost[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
    dp[j][1] = cost[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
    dp[j][2] = cost[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
  }
  ans.push(dp[N - 1][i]);
}

console.log(Math.min(...ans));
