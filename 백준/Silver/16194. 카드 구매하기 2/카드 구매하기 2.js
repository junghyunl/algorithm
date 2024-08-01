const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const cardpack = [0].concat(input[1].split(' ').map(Number));
let d = new Array(n+1);

for(let i = 1; i <= n; i++) {
    let minPrice = cardpack[i];
    for (let j = 1; j <= Math.floor(i/2); j++) {
        minPrice = Math.min(minPrice, d[j] + d[i-j]);
    }
    d[i] = minPrice;
}

console.log(d[n]);