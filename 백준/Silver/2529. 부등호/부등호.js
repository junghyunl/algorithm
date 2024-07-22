const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const k = +input[0];
const inequality = input[1].split(' ');
const number = '0123456789';

let maxNumArr = number.slice(9-k).split('').reverse().join('');
let minNumArr = number.slice(0, k+1);

let curIdx = 0;
for (let i = 0; i < k; i++) {
    if (inequality[i] === '>') {
        curIdx = i+1;
        continue;
    }
    maxNumArr = maxNumArr.slice(0,curIdx) + maxNumArr[i+1] + maxNumArr.slice(curIdx,i+1) + maxNumArr.slice(i+2);
}
curIdx = 0;
for (let i = 0; i < k; i++) {
    if (inequality[i] === '<') {
        curIdx = i+1;
        continue;
    }
    minNumArr = minNumArr.slice(0,curIdx) + minNumArr[i+1] + minNumArr.slice(curIdx,i+1) + minNumArr.slice(i+2);
}

console.log(maxNumArr);
console.log(minNumArr);

