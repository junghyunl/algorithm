const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
let maze = input.slice(1).map(line => line.split('').map(Number));

let check = [[0, 0]];
const dx = [-1,1,0,0];
const dy = [0,0,-1,1];
while (check.length > 0) {
    const [x, y] = check.shift();
    
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m || maze[nx][ny] === 0) continue;
        if (nx === 0 && ny === 0) continue;
        if (maze[nx][ny] === 1) {
            maze[nx][ny] = maze[x][y] + 1;
            check.push([nx, ny]);
        }
    }
}
console.log(maze[n-1][m-1]);