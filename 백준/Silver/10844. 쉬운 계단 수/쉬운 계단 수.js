const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const n = +input;
let stairs = Array.from({length:n+1}, () => Array(10).fill(0));

stairs[1] = [0,1,1,1,1,1,1,1,1,1];

for (let i = 2; i <= n; i++) {
    stairs[i][1] += stairs[i-1][0]%1000000000;
    for (let j = 1; j < 9; j++) {
        stairs[i][j-1] += stairs[i-1][j]%1000000000;
        stairs[i][j+1] += stairs[i-1][j]%1000000000;
    }
    stairs[i][8] += stairs[i-1][9]%1000000000;
}

console.log(stairs[n].reduce((a,b) => a+b)%1000000000);