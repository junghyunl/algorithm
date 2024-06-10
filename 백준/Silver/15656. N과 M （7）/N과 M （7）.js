const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a,b) => a - b);

let output = '';

function bt(arr, depth) {
    if (depth === m) {
        output += arr.join(' ') + '\n';
        return;
    }

    for (let i = 0; i < n; i++) {
        arr[depth] = numbers[i];
        bt(arr, depth + 1);
    }
}

bt([], 0);
console.log(output);