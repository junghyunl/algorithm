const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString();

const n = input.length;
let answer = '';
for (let i = 0; i < n; i++) {
    if (input[i] >= 'a' && input[i] <= 'z') {
        answer += String.fromCharCode(((input[i].charCodeAt() + 13 - 'a'.charCodeAt())%26 + 'a'.charCodeAt()));
    }else if (input[i] >= 'A' && input[i] <= 'Z') {
        answer +=  String.fromCharCode(((input[i].charCodeAt() + 13 - 'A'.charCodeAt())%26 + 'A'.charCodeAt()));
    }else {
        answer += input[i];
    }
}
console.log(answer);