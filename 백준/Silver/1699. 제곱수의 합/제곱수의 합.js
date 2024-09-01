const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const N = +input;
let d = new Array(N+1).fill(Infinity);

for (let i = Math.floor(N**0.5); i > 0; i--) {
    const num = i**2;
    d[num] = 1;
    for (let j = num; j <= N-num; j++) {
        if (d[j] < Infinity) d[j+num] = Math.min(d[j+num], d[j]+1);
    }
}

console.log(d[N]);