const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
const num = input[1].split(' ').map(Number);
num.sort((a,b) => { return a-b; });

let arr = [];

function bt(path, option) {
    if (path.length === m) {
        arr.push(path);
        return;
    }
    for (let i = 0; i < option.length; i++) {
        let newPath = path.concat(option[i]);
        let newOption = option.slice(i+1);
        bt(newPath, newOption);
    }
}

bt([], num);

for (let i of arr) {
    console.log(i.join(' '));
}