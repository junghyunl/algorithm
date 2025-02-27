const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const map = input.slice(1).map((line) => line.split(' ').map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, -1, 0, 1];

let [cy, cx, cd, ans] = [0, 0, 3, 0];

const dice = {
  top: 1,
  left: 4,
  front: 5,
  right: 3,
  back: 2,
  bottom: 6,
};

const rule = [
  ['top', 'front', 'bottom', 'back'],
  ['top', 'right', 'bottom', 'left'],
  ['top', 'back', 'bottom', 'front'],
  ['top', 'left', 'bottom', 'right'],
];

const roll = (dir) => {
  const tmp = dice[rule[dir][0]];
  for (let i = 0; i < 3; i++) {
    dice[rule[dir][i]] = dice[rule[dir][i + 1]];
  }
  dice[rule[dir][3]] = tmp;
};

const bfs = (y, x) => {
  const q = [[y, x]];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[y][x] = true;
  let [cnt, idx, num] = [1, 0, map[y][x]];

  while (q.length > idx) {
    const [cy, cx] = q[idx++];

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [cy + dy[i], cx + dx[i]];

      if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx]) continue;
      if (map[ny][nx] === num) {
        visited[ny][nx] = true;
        q.push([ny, nx]);
        cnt++;
      }
    }
  }
  return cnt;
};

for (let i = 0; i < K; i++) {
  const [ny, nx] = [cy + dy[cd], cx + dx[cd]];
  if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
    cd = (cd + 2) % 4;
  }

  cy += dy[cd];
  cx += dx[cd];
  roll(cd);

  const mapNum = map[cy][cx];
  ans += bfs(cy, cx) * mapNum;

  if (dice['bottom'] > mapNum) {
    cd = (cd + 3) % 4;
  } else if (dice['bottom'] < mapNum) {
    cd = (cd + 1) % 4;
  }
}

console.log(ans);
