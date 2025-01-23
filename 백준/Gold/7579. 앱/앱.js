const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const apps = input[1].split(' ').map(Number);
const costs = input[2].split(' ').map(Number);

const dp = Array(10001).fill(0);

for (let i = 0; i < N; i++) {
  for (let j = 10000; j >= 0; j--) {
    if (dp[j] > 0) {
      dp[j + costs[i]] = Math.max(dp[j + costs[i]], dp[j] + apps[i]);
    }
  }
  dp[costs[i]] = Math.max(dp[costs[i]], apps[i]);
}

let ans = 10001;
for (let i = 10000; i >= 0; i--) {
  if (dp[i] >= M) {
    ans = i;
  }
}

console.log(ans);
