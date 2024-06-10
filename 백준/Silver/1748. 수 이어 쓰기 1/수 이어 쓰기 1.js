const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

const num = Number(input);
const n = input.length;

let answer = 0;
for (let i = 1; i < n; i++) {
    answer += 9*10**(i-1)*i;
}
answer += n*(num-Number('1'.repeat(n-1))*9)
console.log(answer);