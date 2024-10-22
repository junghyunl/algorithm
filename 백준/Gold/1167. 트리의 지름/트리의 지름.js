const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const adjList = Array.from({length:N+1}, () => []);

for (let i = 0; i < N; i++) {
    const line = input[i+1].split(' ').map(Number);
    const from = line[0];
    for (let j = 0; j < Math.floor(line.length/2)-1; j++) {
        adjList[from].push([line[j*2+1], line[j*2+2]]);
    }
}

let dist = 0;
let firstNode = 1;
let visited = Array(N+1).fill(false);
dfs(1, 0);

dist = 0;
visited = Array(N+1).fill(false);
dfs(firstNode, 0);

console.log(dist);

function dfs(node, sum) {
    visited[node] = true;
    if (sum > dist) {
        dist = sum;
        firstNode = node;
    }
    for (let next of adjList[node]) {
        if (!visited[next[0]]) {
            dfs(next[0], sum+next[1]);
        }
    }
}