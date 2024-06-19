const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const n = +input[0];
let painting = input.slice(1).map(line => line.split(''));

const dx = [-1,1,0,0];
const dy = [0,0,-1,1];
const RGB = {'R':1, 'G':1, 'B':2};

function dfs(a, b, num) {
    let stack = [[a,b]];
    const color = painting[a][b];
    painting[a][b] = num;

    while (stack.length > 0) {
        const [x, y] = stack.pop();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
            if (painting[nx][ny] === color) {
                painting[nx][ny] = num;
                stack.push([nx,ny]);
            }
        }
    }
}

let result = [0,0];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!isNaN(painting[i][j])) continue;
        dfs(i,j,RGB[painting[i][j]]);
        result[0]++;
    }
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (painting[i][j] === 0) continue;
        dfs(i,j,0);
        result[1]++;
    }
}
console.log(result.join(' '));