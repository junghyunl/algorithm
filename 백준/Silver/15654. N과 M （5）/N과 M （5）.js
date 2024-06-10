const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr.sort((a,b) => { return a-b; });

let pathArr = [];

function bt(path, option) {
    if (option.length === n-m) {
        pathArr.push(path);
        return false;
    }
    for (let i = 0; i < option.length; i++) {
        let newPath = path.concat(option[i]);
        let newOption = option.slice(0,i).concat(option.slice(i+1));
        bt(newPath, newOption);
    }
    return true;
}

bt([], arr);
const cnt = pathArr.length;
for (let i = 0; i < cnt; i++) {
    console.log(pathArr[i].join(' '));
}