const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, R, Q] = input[0].split(' ').map(Number);
const list = Array.from({length:N+1}, () => []);
for (let i = 0; i < N-1; i++) {
    const [from, to] = input[1+i].split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
}

const count = Array(N+1).fill(0);
const visited = Array(N+1).fill(false);

dfs(R);

let ans = '';
for (let i = 0; i < Q; i++) {
    ans += count[+input[i+N]] + '\n';
}
console.log(ans);

function dfs(num) {
    visited[num] = true;
    let cnt = 1;
    for (let node of list[num]) {
        if (visited[node]) continue;
        cnt += dfs(node);
    }
    count[num] = cnt;
    return cnt;
}