const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const T = +input[0];
let ans = '';

let prime = new Array(10001).fill(false);
prime[2] = true;

for (let i = 3; i < 10001; i+=2) {
    if(isP(i)) prime[i] = true;
}

for (let tc = 0; tc < T; tc++) {
    N = +input[tc+1];
    if (N === 4) ans += '2 2\n';
    else {
        for (let i = Math.floor(N/2)%2 === 0 ? Math.floor(N/2)-1 : Math.floor(N/2); i > 2; i-=2) {
            if(prime[i] && prime[N-i]) {
                ans += i + ' ' + (N-i) + '\n';
                break;
            }
        }
    }
}

console.log(ans);

function isP(num) {
    if (num%2 === 0) return false;
    for (let i = 3; i <= Math.floor(num**0.5); i+=2) {
        if(num%i === 0) return false;
    }
    return true;
}