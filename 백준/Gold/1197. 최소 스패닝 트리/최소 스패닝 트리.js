const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [V, E] = input[0].split(' ').map(Number);
const parent = Array(V);
const edges = Array(E);

for (let i = 0; i < E; i++) {
    edges[i] = input[i+1].split(' ').map(Number);
}
edges.sort((a,b) => a[2] - b[2]);

make();
let cnt = 0, cost = 0;
for (let e of edges) {
    if (union(e[0], e[1])) {
        cost += e[2];
        if (++cnt === V-1) break;
    }
}
console.log(cost);

function make() {
    for (let i = 0; i < V; i++) {
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
    parent[ar] = parent[br];
    return true;
}