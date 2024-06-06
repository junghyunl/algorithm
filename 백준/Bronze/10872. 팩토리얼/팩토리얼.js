const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

let answer = 1;
for (let i = 2; i <= Number(input); i++) {
    answer *= i;
}
console.log(answer);