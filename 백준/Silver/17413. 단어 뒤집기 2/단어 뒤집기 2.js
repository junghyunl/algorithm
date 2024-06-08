const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

const n = input.length;
let answer = '';
let word = [];
for (let i = 0; i < n; i++) {
    if (input[i] === '<') {
        answer += word.reverse().join('');
        word = [];
        while (input[i] !== '>') {
            answer += input[i];
            i++;
        }
        answer += input[i];
        continue;
    }
    if (input[i] === ' ') {
        answer += word.reverse().join('') + ' ';
        word = [];
        continue
    }
    word.push(input[i]);
}
answer += word.reverse().join('');
console.log(answer);