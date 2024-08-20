const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
let stuffs = input.slice(1).map(a => a.split(' ').map(Number));
stuffs.sort((a, b) => b[1] - a[1]);
let d = new Array(k + 1).fill(-1);
d[0] = 0;

for (let stuff of stuffs) {
    for (let i = k; i > -1; i--) {
        if (d[i] === -1 || i + stuff[0] > k) continue;
        d[i + stuff[0]] = Math.max(d[i + stuff[0]], d[i] + stuff[1]);
    }
}

console.log(Math.max(...d));