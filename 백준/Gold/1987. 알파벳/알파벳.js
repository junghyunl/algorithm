const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const [r, c] = input[0].split(' ').map(Number);
const alphabets = input.slice(1).map(a => a.trim().split('').map(a => a.charCodeAt() - 65));
let visited = new Array(26).fill(false);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const answer = new Set();
answer.add(1);

function dfs(x, y, n) {
    const alNum = alphabets[x][y];
    if (visited[alNum]) {
        answer.add(n);
        return;
    }

    visited[alNum] = true;
    for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
        dfs(nx, ny, n+1);
        
    }
    visited[alNum] = false;
}
dfs(0, 0, 0);

console.log(Math.max(...answer));