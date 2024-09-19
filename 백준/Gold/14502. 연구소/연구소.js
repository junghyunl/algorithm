const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const lab = input.slice(1).map(a => a.split(' ').map(Number));

const [virus, walls] = [[], []];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (lab[i][j] === 0) walls.push([i, j]);
        else if (lab[i][j] === 2) virus.push([i, j]);
    }
}
const W = walls.length;
const [dy, dx] = [[-1, 1, 0, 0], [0, 0, -1, 1]];
const selectedWalls = Array(3);
let copyLab = Array(N);
let ans = 0, cnt;

combi(0, 0);
console.log(ans);

function combi(depth, start) {
    if (depth === 3) {
        for (let i = 0; i < N; i++) {
            copyLab[i] = lab[i].slice();
        }
        for (let i = 0; i < 3; i++) {
            copyLab[selectedWalls[i][0]][selectedWalls[i][1]] = 1;
        }

        for (let v of virus) {
            dfs(v[0], v[1]);
        }

        cnt = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (copyLab[i][j] === 0) cnt++;
            }
        }
        ans = Math.max(ans, cnt);
        return;
    }
    for (let i = start; i < W; i++) {
        selectedWalls[depth] = walls[i];
        combi(depth + 1, i + 1);
    }
}

function dfs(y, x) {
    for (let i = 0; i < 4; i++) {
        const [ny, nx] = [y + dy[i], x + dx[i]];
        if (ny < 0 || ny >= N || nx < 0 || nx >= M || copyLab[ny][nx] != 0) continue;
        copyLab[ny][nx] = 2;
        dfs(ny, nx);
    }
}
