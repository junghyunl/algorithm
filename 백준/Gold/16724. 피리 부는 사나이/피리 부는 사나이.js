const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map(a => a.split('').map(b => setNum(b)));
const visited = Array.from({length:N}, () => Array(M).fill(0));
const dy = [-1,1,0,0];
const dx = [0,0,-1,1];

let num = 1, ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] === 0) {
      visited[i][j] = num++;
      dfs(i, j);
    }
  }
}
console.log(ans);

function dfs(y, x) {
  const ny = y + dy[map[y][x]];
  const nx = x + dx[map[y][x]];
  if (visited[ny][nx] === visited[y][x]) {
    ans++;
    return;
  }
  if (visited[ny][nx] > 0) return;
  visited[ny][nx] = visited[y][x];
  dfs(ny, nx);
}

function setNum(str) {
  switch (str) {
    case 'U': return 0;
    case 'D': return 1;
    case 'L': return 2;
    case 'R': return 3;

    default: break;
  }
}
