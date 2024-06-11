const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a,b) => a-b);

let result = '';

function bt(path) {
    if (path.length === m) {
        result += path.join(' ') + '\n';
        return;
    }
    let lastNum = 0;
    for (let i = 0; i < n; i++) {
        if (lastNum !== numbers[i]) {
            lastNum = numbers[i];
            bt([...path, numbers[i]]);
        }
    } 
}

bt('');
console.log(result);