const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n').map(a => a.trim());

let ans = 0;
if (!isNaN(input[0])) ans = +input[0]+3;
else if (!isNaN(input[1])) ans = +input[1]+2;
else if (!isNaN(input[2])) ans = +input[2]+1;

if (ans%15 === 0) console.log('FizzBuzz');
else if (ans%5 === 0) console.log('Buzz');
else if (ans%3 === 0) console.log('Fizz');
else console.log(ans);