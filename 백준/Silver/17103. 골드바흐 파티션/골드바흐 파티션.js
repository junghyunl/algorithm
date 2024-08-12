const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function isP(n) {
    if (n === 2) return true;
    if (n%2 === 0) return false;
    for (let i = 3; i <= Math.floor(n**0.5); i+=2) {
        if (n%i === 0) return false;
    }
    return true;
}

const t = +input[0];
let p = new Array(999998).fill(false);
let answer = '';

for (let i = 2; i < 999999; i++) {
    if(isP(i)) p[i] = true;
}

for (let i = 0; i < t; i++) {
    let count = 0;
    const n = +input[i+1];

    for (let j = 2; j <= n/2; j++) {
        if (p[j] && p[n-j]) count++;
    }
    answer += count + '\n';
}

console.log(answer);