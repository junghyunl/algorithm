const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin
const n = Number(input);

let mArr = [0, 0];

for (let i = n; i > 1; i--) {
    let mNum = i;
    while (mNum%2 === 0) {
        mNum /= 2;
        mArr[0]++;
    }
    while (mNum%5 === 0) {
        mNum /= 5;
        mArr[1]++;
    }
}

console.log(Math.min(mArr[0], mArr[1]));