const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.trim());
//  /dev/stdin
let m = +input[1];

const lStack = input[0].split('');
const rStack = [];

function editor(command) {
    if (command === 'L') {
        if (!lStack[0]) return;
        rStack.push(lStack.pop());
    }else if (command === 'D') {
        if (!rStack[0]) return;
        lStack.push(rStack.pop());
    }else if (command === 'B') {
        lStack.pop();
    }else {
        lStack.push(command.split(' ')[1]);
    }
}

for (let i = 0; i < m; i++) {
    editor(input[2+i]);
}

console.log(lStack.join('')+rStack.reverse().join(''));