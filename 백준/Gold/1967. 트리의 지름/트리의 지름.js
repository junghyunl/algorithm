const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const adjList = Array.from({length:N+1}, () => []);
const inDegree = Array(N+1).fill(0);

for (let i = 0; i < N-1; i++) {
  const [from, to, weight] = input[i+1].split(' ').map(Number);
  adjList[from].push([to, weight]);
  adjList[to].push([from, weight]);
  inDegree[from]++;  
  inDegree[to]++;  
}

let ans = 0;
let visited;

for (let i = 1; i < N+1; i++) {
  if (inDegree[i] === 1) {
    visited = Array(N+1).fill(false);
    dfs(i, 0);
  }
}

console.log(ans);

function dfs(node, sum) {
  visited[node] = true;
  if (sum > 0 && inDegree[node] === 1) {
    ans = Math.max(ans, sum);
    return;
  }
  for (let next of adjList[node]) {
    if (!visited[next[0]]) {
      dfs(next[0], sum+next[1]);
    }
  }
}