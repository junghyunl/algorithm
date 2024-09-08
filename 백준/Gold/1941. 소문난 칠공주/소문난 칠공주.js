const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(a => a.trim());

const girls = input.map(a => a.split(''));
let visited;
let dasom = new Array(25).fill(0);
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
let ans = 0;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (girls[i][j] === 'S') dasom[i*5+j] = 1;
    }
}

combi(0,0,0,0);
console.log(ans);

function combi(depth, start, cnt, flag) {
    if(depth === 7) {
        if(cnt > 3 && check(flag)) ans++; 
        return;
    }
    for (let i = start; i < 25; i++) {
        combi(depth+1, i+1, cnt+dasom[i], flag|1<<i);
    }
}

function check(flag) {
    visited = Array.from({ length: 5 }, () => Array(5).fill(false));
    for (let i = 0; i < 25; i++) {
        if((flag & 1 << i) != 0) visited[Math.floor(i/5)][i%5] = true;
    }
    let areaCnt = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if(visited[i][j]) {
                bfs(i,j);
                areaCnt++;
            }
        }
    }
    return areaCnt === 1 ? true : false;
}

function bfs(a, b) {
    const queue = [[a, b]];
    visited[a][b] = false;
    let idx = 0;

    while (idx < queue.length) {
        const [y, x] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (ny<0 || ny >= 5 || nx<0 || nx >= 5 || !visited[ny][nx]) continue;
            visited[ny][nx] = false;
            queue.push([ny, nx]);
        }
    }
}
