const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [M, S] = input[0].split(' ').map(Number);

const dy = [0, -1, -1, -1, 0, 1, 1, 1];
const dx = [-1, -1, 0, 1, 1, 1, 0, -1];

const ddy = [-1, 0, 1, 0];
const ddx = [0, -1, 0, 1];

const map = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => Array(8).fill(0)));
const copyFish = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => Array(8).fill(0)));
const smellMap = Array.from({ length: 4 }, () => Array(4).fill(0));
const fishCntMap = Array.from({ length: 4 }, () => Array(4).fill(0));

for (let i = 0; i < M; i++) {
  const [fy, fx, fd] = input[i + 1].split(' ').map((a) => +a - 1);
  map[fy][fx][fd]++;
}

let [sharkY, sharkX] = input[M + 1].split(' ').map((a) => +a - 1);

const moveFish = (y, x, d) => {
  if (map[y][x][d] === 0) return;

  for (let i = 0; i < 8; i++) {
    const curDir = (d - i + 8) % 8;
    const [ny, nx] = [y + dy[curDir], x + dx[curDir]];
    if (ny < 0 || ny >= 4 || nx < 0 || nx >= 4 || (ny === sharkY && nx === sharkX) || smellMap[ny][nx]) continue;
    else {
      map[ny][nx][curDir] += (map[y][x][d] % 1000000) * 1000000;
      return;
    }
  }
  map[y][x][d] += (map[y][x][d] % 1000000) * 1000000;
};

let catchFishCnt = -1,
  sharkDir = '';

const dfs = (y, x, d, cnt) => {
  if (d.length === 3) {
    if (cnt > catchFishCnt) {
      catchFishCnt = cnt;
      sharkDir = d;
    }
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + ddy[i], x + ddx[i]];
    if (ny < 0 || ny >= 4 || nx < 0 || nx >= 4) continue;

    const tmp = fishCntMap[ny][nx];
    fishCntMap[ny][nx] -= tmp;
    dfs(ny, nx, d.toString() + i.toString(), cnt + tmp);
    fishCntMap[ny][nx] += tmp;
  }
};

const moveShark = (turn) => {
  sharkDir
    .split('')
    .map(Number)
    .forEach((d) => {
      sharkY += ddy[d];
      sharkX += ddx[d];

      for (let i = 0; i < 8; i++) {
        if (map[sharkY][sharkX][i]) {
          smellMap[sharkY][sharkX] = turn;
          map[sharkY][sharkX][i] = 0;
        }
      }
    });
};

for (let i = 0; i < S; i++) {
  // 물고기 복제 (보관)
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      for (let l = 0; l < 8; l++) {
        copyFish[j][k][l] = map[j][k][l];
      }
    }
  }

  // 물고기 이동
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      for (let l = 0; l < 8; l++) {
        moveFish(j, k, l);
      }
    }
  }

  // 물고기 개수 정리
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      let cnt = 0;
      for (let l = 0; l < 8; l++) {
        map[j][k][l] = Math.floor(map[j][k][l] / 1000000);
        cnt += map[j][k][l];
      }
      fishCntMap[j][k] = cnt;
    }
  }

  // 상어 이동 + 물고기 없어지면 냄새
  catchFishCnt = -1;
  dfs(sharkY, sharkX, '', 0);
  moveShark(i + 1);

  // 2턴 전 냄새 삭제
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      if (smellMap[j][k] === i - 1) {
        smellMap[j][k] = 0;
      }
    }
  }

  // 복제 물고기 추가
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      for (let l = 0; l < 8; l++) {
        map[j][k][l] += copyFish[j][k][l];
      }
    }
  }
}

let ans = 0;
for (let j = 0; j < 4; j++) {
  for (let k = 0; k < 4; k++) {
    for (let l = 0; l < 8; l++) {
      ans += map[j][k][l];
    }
  }
}
console.log(ans);
