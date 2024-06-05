const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin
let answer = 0;
let stick = 0;

for (let i = 0; i < input.length; i++) {
    if (input.slice(i,i+2) === '()') {
        answer += stick;
        i++;
        continue;
    }
    if (input[i] === '(') {
        answer++;
        stick++;
        continue;
    }
    if (input[i] === ')') stick--;
}

console.log(answer);