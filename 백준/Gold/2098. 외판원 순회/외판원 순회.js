const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const cost = input.slice(1).map(a => a.split(' ').map(Number));
const dp = Array.from({length:N}, () => Array(1<<N).fill(-1));

function dfs(cur, visited) {
    if (visited === (1<<N)-1) return cost[cur][0] || Infinity;
    if (dp[cur][visited] > -1) return dp[cur][visited];

    let res = Infinity;
    for (let i = 1; i < N; i++) {
        if ((visited & 1<<i) === 0 && cost[cur][i] > 0) {
            res = Math.min(res, dfs(i, visited | 1<<i) + cost[cur][i]);
        }
    }
    dp[cur][visited] = res;
    return res;
}

console.log(dfs(0, 1));