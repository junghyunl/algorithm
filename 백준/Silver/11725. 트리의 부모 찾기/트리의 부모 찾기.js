const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const n = +input[0];
let tree = Array.from({length:n+1}, () => []);
let visited = new Array(n+1).fill(false);
const treeD = {};

for (let i = 0; i < n-1; i++) {
    const [a, b] = input[1+i].split(' ').map(Number);

    tree[a].push(b);
    tree[b].push(a);
}

let idx = 0;
const queue = [1];
while (queue[idx++]) {
    const node = queue[idx-1];
    visited[node] = true;

    for (let i of tree[node]) {
        if (visited[i]) continue;
        treeD[i] = node;
        queue.push(i);
    }
}

let answer = '';
for (let i = 2; i <= n; i++) {
    answer += treeD[i] + '\n';
}

console.log(answer);