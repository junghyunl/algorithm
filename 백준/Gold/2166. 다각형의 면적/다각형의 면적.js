const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const point = input.slice(1).map(a => a.split(' ').map(Number));

let area = 0;
for (let i = 0; i < N-1; i++) {
    area += point[i][0]*point[i+1][1] - point[i+1][0]*point[i][1];
}
area += point[N-1][0]*point[0][1] - point[0][0]*point[N-1][1];

console.log(Math.abs(area/2).toFixed(1));