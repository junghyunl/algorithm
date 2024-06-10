const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a,b) => a-b);

let result = '';

function bt(path, option) {
    if (path.length === m) {
        result += path.join(' ') + '\n';
        return;
    }
    const optionSet = Array.from(new Set(option));
    for (let i = 0; i < optionSet.length; i++) {
        const num = option.indexOf(optionSet[i]);
        let newPath = path.concat(optionSet[i]);
        let newOption = option.slice(0, num).concat(option.slice(num+1));
        bt(newPath, newOption);
    }
}

bt([], numbers);

console.log(result);