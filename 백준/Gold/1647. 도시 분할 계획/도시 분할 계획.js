const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(a => a.split(' ').map(Number));
edges.sort((a,b) => a[2]-b[2]);
const parent = Array(N+1);

make();
let cnt = 0, cost = 0;
for (let e of edges) {
    if (union(e[0], e[1])) {
        cost += e[2];
        if (++cnt == N-2) break;
    }
}
console.log(N === 2 ? 0 : cost);

function make() {
    for (let i = 0; i < N+1; i++) {
        parent[i] = i;
    }
}
function find(a) {
    if (parent[a] === a) return a;
    return parent[a] = find(parent[a]);
}
function union(a, b) {
    const ar = find(a);
    const br = find(b);
    if (ar === br) return false;
    parent[ar] = br;
    return true;
}