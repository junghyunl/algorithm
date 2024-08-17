const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = input.length-1;
let prime = new Array(1000000).fill(false);
let answer = '';

function isPrime(num) {
    if (num%2 === 0) return false;
    for (let i = 3; i <= Math.floor(num**0.5); i+=2) {
        if (num%i === 0) return false;
    }
    return true;
}

for (let i = 3; i < 1000000; i++) {
    if (isPrime(i)) prime[i] = true;
}
for (let i = 0; i < n; i++) {
    for (let j = 3; j < input[i]/2+1; j++) {
        if (prime[j] && prime[input[i] - j]) {
            answer += input[i] + ' = ' + j + ' + '+ (input[i] - j) + '\n';
            break;
        }
    }
}
console.log(answer);