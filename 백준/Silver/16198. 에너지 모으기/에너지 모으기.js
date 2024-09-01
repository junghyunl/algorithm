const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
let ans = 0;

bt(numbers, 0);
console.log(Math.max(ans));

function bt(path, energy) {
    if (path.length == 2) {
        ans = Math.max(ans, energy);
        return;
    }
    for (let i = 1; i < path.length-1; i++) {
        bt(path.slice(0,i).concat(path.slice(i+1)), energy + path[i-1]*path[i+1]);
    }
}