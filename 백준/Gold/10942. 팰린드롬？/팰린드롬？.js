const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0], M = +input[2];
const numbers = input[1].split(' ').map(Number);
const palindrome = Array.from({length:N}, () => Array(N).fill(0));

for (let i = 0; i < N; i++) {
    let left = i, right = i;
    while (numbers[left] === numbers[right]) {
        if (left < 0 || right >= N) break;
        palindrome[left--][right++] = 1;
    }
    left = i, right = i+1;
    while (numbers[left] === numbers[right]) {
        if (left < 0 || right >= N) break;
        palindrome[left--][right++] = 1;
    }
}

let ans = '';
for (let i = 0; i < M; i++) {
    const [S, E] = input[3+i].split(' ').map(a => +a-1);
    ans += palindrome[S][E] + '\n';
}

console.log(ans);