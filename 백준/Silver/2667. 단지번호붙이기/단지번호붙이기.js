const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const n = +input[0];
let houses = input.slice(1).map(line => line.split('').map(Number));
let count = [];

const dx = [-1,1,0,0];
const dy = [0,0,-1,1];

function dfs(a, b) {
    let cnt = 0;

    let stack = [[a,b]];
    while (stack.length > 0) {
        const [x,y] = stack.pop();
        if (houses[x][y] === 0) continue;
        houses[x][y] = 0;
        cnt++;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n || houses[nx][ny] === 0) continue;
            stack.push([nx,ny]);
        }
    }
    return cnt;
}

for(let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (houses[i][j] === 1) count.push(dfs(i,j));
    }
}
count.sort((a,b) => a-b);
count.unshift(count.length);
console.log(count.join('\n'));