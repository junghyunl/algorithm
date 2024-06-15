const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
let campus = input.slice(1).map(line => line.split(''));

let queue = [];
loop: for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (campus[i][j] === 'I') {
            queue.push([i, j]);
            campus[i][j] = 'X';
            break loop;
        }
    }
}

const dx = [-1,1,0,0];
const dy = [0,0,-1,1];
let result = 0;

while (queue.length > 0) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m || campus[nx][ny] === 'X') continue;
        if (campus[nx][ny] === 'P') result++;
        campus[nx][ny] = 'X';
        queue.push([nx, ny]);
    }
}

console.log(result === 0 ? 'TT' : result);