const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
for (let i = 0; i < N-1; i++) {
    numbers.push(+input[2+i].split(' ')[1]);
}

const dp = Array.from({length:N+1}, () => Array(N+1).fill(Infinity));
for (let i = 0; i < N; i++) {
    dp[i][i+1] = 0;
}
for (let len = 2; len <= N; len++) {
    for (let i = 0; i + len <= N; i++) {
        for (let j = i+1; j < i + len; j++) {
            dp[i][i+len] = Math.min(dp[i][i+len], dp[i][j] + dp[j][i+len] + numbers[i]*numbers[j]*numbers[i+len]);
        }
    }
}

console.log(dp[0][N]);