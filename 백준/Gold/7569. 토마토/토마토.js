const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [m, n, h] = input[0].split(' ').map(Number);
let tomato = [];
for (let i = 0; i < h; i++) {
    tomato.push(input.slice(i*n+1, (i+1)*n+1).map(line => line.split(' ').map(Number)));
}

let queue = [];
for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (tomato[i][j][k] === 1) queue.push([i,j,k]);
        }
    }
}

const dx = [-1,1,0,0,0,0];
const dy = [0,0,-1,1,0,0];
const dz = [0,0,0,0,-1,1];
let idx = 0;
while (queue.length > idx) {
    const [z, x, y] = queue[idx++];

    for (let i = 0; i < 6; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        const nz = z + dz[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m || nz < 0 || nz >= h) continue;
        if (tomato[nz][nx][ny] === 0) {
            queue.push([nz,nx,ny]);
            tomato[nz][nx][ny] = tomato[z][x][y] + 1;
        }
    }
}

let maxValue = 0;
loop: for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (tomato[i][j][k] === 0) {
                maxValue = -1;
                break loop;
            }
            maxValue = Math.max(maxValue, tomato[i][j][k]-1);
        }
    }
}
console.log(maxValue);