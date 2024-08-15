const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const n = input.length;
let words = [];

for (let i = 0; i < n; i++) {
    words.push(input.slice(i, n));
}

words.sort();
let answer = ''

for (let i = 0; i < words.length; i++) {
    answer += words[i] + '\n';
}

console.log(answer);