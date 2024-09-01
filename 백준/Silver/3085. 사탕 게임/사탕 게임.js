const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
let candies = input.slice(1).map(a => a.trim().split(''));
const dy = [1,0]; // 0: 세로, 1: 가로
const dx = [0,1];
let ans = 0;

for (let i = 0; i < N; i++) {
    ans = Math.max(ans, count(i,i,0), count(i,i,1));
}
for (let i = 0; i < N-1; i++) {
    for (let j = 0; j < N; j++) {
        if (candies[i][j] === candies[i+1][j]) continue;
        [candies[i][j], candies[i+1][j]] = [candies[i+1][j], candies[i][j]];
        ans = Math.max(ans, count(i,j,1), count(i+1,j,1), count(i,j,0));
        [candies[i][j], candies[i+1][j]] = [candies[i+1][j], candies[i][j]];
    }
}
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N-1; j++) {
        if (candies[i][j] === candies[i][j+1]) continue;
        [candies[i][j], candies[i][j+1]] = [candies[i][j+1], candies[i][j]];
        ans = Math.max(ans, count(i,j,0), count(i,j+1,0), count(i,j,1));
        [candies[i][j], candies[i][j+1]] = [candies[i][j+1], candies[i][j]];
    }
}

console.log(ans);

function count(y, x, dr) {
    let [ny, nx] = dr === 0 ? [0, x] : [y, 0];

    let curCandy = candies[ny][nx];
    let maxLen = 1;
    let len = 1;

    for (let i = 1; i < N; i++) {
        ny += dy[dr];
        nx += dx[dr];
        if (candies[ny][nx] === curCandy) len++;
        else {
            curCandy = candies[ny][nx];
            maxLen = Math.max(maxLen, len);
            len = 1;
        }
    }
    return Math.max(Math.max(maxLen, len));
}