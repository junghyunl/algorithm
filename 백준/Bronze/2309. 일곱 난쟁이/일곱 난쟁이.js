const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
//  /dev/stdin

let arr = [];
const total = input.reduce((a,b) => a+b);
const n = input.length;
for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
        if (total - input[i] - input[j] === 100) {
            arr = input.slice(0,i).concat(input.slice(i+1, j).concat(input.slice(j+1)));
            break;
        }
    }
}
arr.sort((a,b) => { return a-b; });
console.log(arr.join('\n'));