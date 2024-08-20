const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const N = +input;
let d = Array.from({length:N+1}, () => Array(2));
d[1] = [0,1];

for (let i = 2; i <= N; i++){
    d[i][0] = BigInt(d[i-1][1] + d[i-1][0]);
    d[i][1] = BigInt(d[i-1][0]);
}

console.log(BigInt(d[N][0]+d[N][1]).toString());