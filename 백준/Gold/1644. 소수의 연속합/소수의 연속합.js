const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const N = +input;
const prime = [];

const visited = Array(N+1).fill(false);
for (let i = 2; i < N+1; i++) {
    if (visited[i]) continue;
    prime.push(i);

    for (let j = 2; i*j < N+1; j++) {
        visited[i*j] = true;
    }
}

const len = prime.length;
let left = 0, ans = 0, sum = 0;
for (let i = 0; i < len; i++) {
    sum += prime[i];

    while (sum - prime[left] >= N) {
        sum -= prime[left++];
    }

    if (sum === N) ans++;
}
console.log(ans);