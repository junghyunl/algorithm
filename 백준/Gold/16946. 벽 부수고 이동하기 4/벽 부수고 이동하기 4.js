const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map(a => a.split('').map(Number));
const cntMap = Array.from({length:N}, ()=>Array(M).fill(0));
const dy = [-1,1,0,0];
const dx = [0,0,-1,1];

const area = {};
area[1] = 0;
let CN = 2;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (map[i][j] === 0) area[CN] = bfs(i,j,CN++);
    }
}
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (map[i][j] === 1) cntMap[i][j] = getCnt(i,j);
    }
}

let ans = '';
for (let i = 0; i < N; i++) {
    ans += cntMap[i].join('') + '\n';
}
console.log(ans);

function bfs(a, b, areaNum) {
    map[a][b] = areaNum;
    let idx = 0;
    let cnt = 1;
    const queue = [[a,b]];

    while (idx < queue.length) {
        const [y, x] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (ny < 0 || ny >= N || nx < 0 || nx >= M || map[ny][nx] !== 0) continue;
            map[ny][nx] = areaNum;
            cnt++;
            queue.push([ny, nx]);
        }
    }
    return cnt;
}

function getCnt(y, x) {
    let res = 1;
    let checked = new Set();
    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (ny < 0 || ny >= N || nx < 0 || nx >= M || checked.has(map[ny][nx])) continue;
        checked.add(map[ny][nx]);
        res += area[map[ny][nx]];
    }
    return Math.floor(res%10);
}