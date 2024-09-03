const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const shirts = input[1].split(' ').map(Number);
const [t,p] = input[2].split(' ').map(Number);

let ans = 0;
for (let i = 0; i < shirts.length; i++) {
    ans += Math.ceil(shirts[i]/t);
}
console.log(ans);
console.log(Math.floor(n/p) + ' ' + n%p);