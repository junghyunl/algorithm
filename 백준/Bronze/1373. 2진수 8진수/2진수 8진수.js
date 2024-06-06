const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

console.log(BigInt('0b'+input).toString(8));