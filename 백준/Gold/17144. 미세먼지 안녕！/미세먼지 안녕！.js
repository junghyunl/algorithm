const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [R, C, T] = input[0].split(' ').map(Number);
const house = input.slice(1).map(a => a.split(' ').map(Number));
const [dy, dx] = [[-1, 1, 0, 0], [0, 0, -1, 1]];
const option = [[0,3,1,2], [1,3,0,2]];

let AC;
const airCleaner = [];
for (let i = 0; i < R; i++) {
    if (house[i][0] === -1) {
        AC = i;
        airCleaner.push([0,i+1]);
        airCleaner.push([i+1,R]);
        break;
    }
}
for (let i = 0; i < T; i++) {
    const arr = [];
    for (let j = 0; j < R; j++) {
        for (let k = 0; k < C; k++) {
            if (house[j][k] > 4) arr.push([j, k, Math.floor(house[j][k]/5)]);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        spread(arr[j][0], arr[j][1], arr[j][2]); 
    }
    circulate(AC,0,0);
    circulate(AC+1,0,1);
    house[AC][1] = 0;
    house[AC+1][1] = 0;
}

let ans = 0;
for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        ans += house[i][j];
    }
}
console.log(ans+2);

function spread(y, x, dust) {
    let cnt = 0;
    for (let i = 0; i < 4; i++) {
        const [ny, nx] = [y + dy[i], x + dx[i]];
        if (ny < 0 || ny >= R || nx < 0 || nx >= C || house[ny][nx] === -1) continue;
        cnt++;
        house[ny][nx] += dust;
    }
    house[y][x] -= cnt * dust;
}

function circulate(y, x, op) {
    
    let idx = 0;
    y += dy[option[op][0]];
    x += dx[option[op][0]];
    for (let i = 0; i < 4; i++) {
        while (true) {
            const [ny, nx] = [y + dy[option[op][idx]], x + dx[option[op][idx]]];
            if (ny < airCleaner[op][0] || ny >= airCleaner[op][1] || nx < 0 || nx >= C || house[ny][nx] === -1) break;
            house[y][x] = house[ny][nx];
            [y, x] = [ny, nx];
        }
        idx++;
    }
}