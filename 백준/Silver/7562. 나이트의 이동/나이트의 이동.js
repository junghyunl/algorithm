const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const T = +input[0];
const dy = [-1,-2,-2,-1,1,2,2,1];
const dx = [-2,-1,1,2,2,1,-1,-2];
let N, chess, ey, ex, ans='';

for (let tc = 0; tc < T; tc++) {
    N = +input[1+3*tc];
    chess = Array.from({length:N}, () => Array(N).fill(0));

    const [y, x] = input[2+3*tc].split(' ').map(Number);
    [ey, ex] = input[3+3*tc].split(' ').map(Number);

    if (y === ey && x === ex) ans += '0\n';
    else {
        bfs(y,x);
        ans += chess[ey][ex] + '\n';
    }
}

console.log(ans);

function bfs(a, b) {
    const queue = [];
    queue.push([a, b]);

    while(queue.length > 0) {
        const [y, x] = queue.shift();
        
        for (let i = 0; i < 8; i++) {
            const [ny, nx] = [y + dy[i], x + dx[i]];
            if (ny < 0 || ny >= N || nx < 0 || nx >= N || chess[ny][nx] > 0) continue;
            chess[ny][nx] = chess[y][x]+1;
            queue.push([ny,nx]);
            if (ny === ey && nx === ex) return;
        }
    }
}