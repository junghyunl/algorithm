const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split(' ');

console.log(+(input[0]+input[1]) + +(input[2]+input[3]));
