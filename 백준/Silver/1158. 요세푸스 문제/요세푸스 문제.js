const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
//  /dev/stdin
let [n, k] = [Number(input[0]), Number(input[1])];

let arr = [];
for (let i = 0; i < n; i++) arr.push(i+1);

let answer = [];
let i = k-1;
while (arr.length > 0) { 
    answer.push(arr.splice(i,1));
    i = (i+k-1)%arr.length;
}
console.log('<' + answer.join(', ') + '>');