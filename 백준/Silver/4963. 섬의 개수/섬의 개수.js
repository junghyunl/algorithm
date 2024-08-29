const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

let i = 0;
let n = 0, m = 0, ans = '', map = [];
const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
const dx = [0, 0, -1, 1, -1, 1, 1, -1];
while (true) {
    [n, m] = input[i].split(' ').map(Number);
    if (n == 0) break;
    map = input.slice(i + 1, i + 1 + m).map(a => a.split(' ').map(Number));

    total = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (map[i][j] == 1) {
                bfs(i, j);
                total++;
            }
        }
    }
    ans += total + '\n';
    i += m + 1;
}

console.log(ans);

function bfs(a,b) {
    const queue = [];
    queue.push([a,b]);

    while (queue.length > 0) {
        const [y, x] = queue.shift();

        for (let i = 0; i < 8; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (ny < 0 || ny >= m || nx < 0 || nx >= n || map[ny][nx] == 0) continue;
            map[ny][nx] = 0;
            queue.push([ny, nx]);
        }
    }
}