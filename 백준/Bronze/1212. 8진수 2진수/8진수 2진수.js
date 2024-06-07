const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

let n = input;
let num = '';

for (let i = 0; i < n.length; i++) {
    const cnt = 3-Number(n[i]).toString(2).length;
    num += '0'.repeat(cnt) + Number(n[i]).toString(2);
}

console.log(BigInt(num).toString());