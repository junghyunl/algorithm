const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input.slice(1, N+1).map(Number);
const tree = Array(N*4).fill(0);

let ans = '';
init(0, N-1, 1);
for (let i = 0; i < M; i++) {
    const [a, b] = input[N+1+i].split(' ').map(a => +a-1);
    ans += getMin(0, N-1, 1, a, b) + '\n';
}
console.log(ans);

function init(start, end, node) {
    if (start === end) return tree[node] = numbers[start];
    const mid = Math.floor((start+end)/2);
    return tree[node] = Math.min(init(start, mid, node*2),init(mid+1, end, node*2+1));
}

function getMin(start, end, node, left, right) {
    if (end < left || start > right) return Infinity;
    if (start >= left && end <= right) return tree[node];
    const mid = Math.floor((start+end)/2);
    return Math.min(getMin(start, mid, node*2, left, right), getMin(mid+1, end, node*2+1, left, right));
}