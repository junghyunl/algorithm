const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const lotto = input.map(a => a.split(' ').slice(1).map(Number));
const n = lotto.length - 1;
let answer = '';

function bt(path, option) {
    if (path.length === 6) {
        answer += path.join(' ') + '\n';
        return;
    }
    for (let i = 0; i < option.length; i++) {
        bt(path.concat(option[i]), option.slice(i+1));
    }
}

for (let i = 0; i < n; i++) {
    bt([], lotto[i]);
    answer += '\n';
}

console.log(answer);