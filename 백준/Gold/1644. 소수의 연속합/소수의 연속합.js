const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const N = +input;
const prime = [2];

for (let i = 3; i < N+1; i+=2) {
    if (isPrime(i)) prime.push(i);
}

const len = prime.length;
let left = 0, ans = 0, sum = 0;
for (let i = 0; i < len; i++) {
    sum += prime[i];

    while (sum - prime[left] >= N) {
        sum -= prime[left++];
    }

    if (sum === N) ans++;
}
console.log(ans);

function isPrime(num) {
    for (let i = 3; i <= Math.floor(num**0.5); i+=2) {
        if (num%i === 0) return false;
    }
    return true;
}