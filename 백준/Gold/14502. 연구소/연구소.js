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
const [V, W] = [virus.length, walls.length];
const [dy, dx] = [[-1, 1, 0, 0], [0, 0, -1, 1]];
let copyLab = Array(N);
let ans = 0, cnt;

permutation(0);
console.log(ans);

function permutation(depth) {
    if (depth === 3) {
        for (let i = 0; i < N; i++) {
            copyLab[i] = lab[i].slice();
        }
        for (let i = 0; i < 3; i++) {
            copyLab[walls[i][0]][walls[i][1]] = 1;
        }

        for (let i = 0; i < V; i++) {
            dfs(virus[i][0], virus[i][1]);
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
    for (let i = depth; i < W; i++) {
        [walls[i], walls[depth]] = [walls[depth], walls[i]];
        permutation(depth + 1);
        [walls[i], walls[depth]] = [walls[depth], walls[i]];
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
