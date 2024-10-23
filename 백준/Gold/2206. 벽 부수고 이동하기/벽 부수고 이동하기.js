const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map(a => a.trim().split('').map(a => -a));
const dy = [-1,1,0,0];
const dx = [0,0,-1,1];

map[0][0] = 1;
const queue = [[0,0]];
let index = 0;

while (index < queue.length) {
    const [y, x] = queue[index++];

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (ny < 0 || ny >= N || nx < 0 || nx >= M || map[ny][nx] !== 0) continue;
        map[ny][nx] = map[y][x]+1;
        queue.push([ny, nx]);
    }
}

const wallMap = Array(N);
for (let i = 0; i < N; i++) {
  wallMap[i] = map[i].slice().map(a => {
    if (a === 0) return Infinity;
    else return a;
  });
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (map[i][j] === -1 && check(i, j) < Infinity) {
            bfs(i,j,check(i, j)+1);
        }
    }
}

console.log(wallMap[N-1][M-1] === Infinity ? -1 : wallMap[N-1][M-1]);

function check(y, x) {
  let dist = Infinity;
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (ny < 0 || ny >= N || nx < 0 || nx >= M || map[ny][nx] < 1) continue;
    dist = Math.min(dist, map[ny][nx]);
  }
  return dist;
}
function bfs(y, x, dist) {
    const q = [[y, x, dist]];
    let idx = 0;

    while (idx < q.length) {
      const [y, x, dist] = q[idx++];

      for (let i = 0; i < 4; i++) {
          const ny = y + dy[i];
          const nx = x + dx[i];
          if (ny < 0 || ny >= N || nx < 0 || nx >= M || wallMap[ny][nx] === -1) continue;
          if (dist+1 < wallMap[ny][nx]) {
            wallMap[ny][nx] = dist+1;
            q.push([ny, nx, dist+1]);
          }
      }
    }
}