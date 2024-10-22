const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const adjList = Array.from({length:N+1}, () => []);

for (let i = 0; i < N-1; i++) {
  const [from, to, weight] = input[i+1].split(' ').map(Number);
  adjList[from].push([to, weight]);
  adjList[to].push([from, weight]);
}

let visited = Array(N+1).fill(false);
let dist = 0;
let firstNode = 1;
dfs(1, 0);

visited = Array(N+1).fill(false);
dist = 0;
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