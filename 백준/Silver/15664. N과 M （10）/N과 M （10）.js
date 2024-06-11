const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a,b) => a-b);

let arr = '';

function bt(path, option) {
    if (path.length === m) {
        arr += path.join(' ') + '\n';
        return;
    }

    let lastNum = 0;
    for(let i = 0; i < option.length; i++) {
        if (option[i] !== lastNum) {
            let newPath = [...path, option[i]];
            let newOption = option.slice(i+1);
            lastNum = option[i];
            bt(newPath, newOption);
        }
    }
}

bt('', numbers);

console.log(arr);