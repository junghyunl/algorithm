const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
const paper = input.slice(1).map(line => line.split(' ').map(Number));
let visited = Array.from({length:n}, () => Array(m).fill(false));

const dx = [-1,1,0,0];
const dy = [0,0,-1,1];
let ternomino = {};

function t(x,y) {
    if (y < m-2) {
        if (x > 0) ternomino[paper[x][y] + paper[x][y+1] + paper[x][y+2] + paper[x-1][y+1]] = 1;
        if (x < n-1) ternomino[paper[x][y] + paper[x][y+1] + paper[x][y+2] + paper[x+1][y+1]] = 1;
    }
    if (x < n-2) {
        if (y > 0) ternomino[paper[x][y] + paper[x+1][y] + paper[x+2][y] + paper[x+1][y-1]] = 1;
        if (y < m-1) ternomino[paper[x][y] + paper[x+1][y] + paper[x+2][y] + paper[x+1][y+1]] = 1;

    }
}

function dfs(x, y, total, depth) {
    total += paper[x][y];
    if (depth === 4) {
        ternomino[total] = 1;
        return;
    }
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;
        if (visited[nx][ny] === false) {
            visited[x][y] = true;
            dfs(nx,ny,total,depth+1);
            visited[x][y] = false;
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        dfs(i,j,0,1);
        t(i,j);
    }
}
console.log(Math.max(...Object.keys(ternomino)));