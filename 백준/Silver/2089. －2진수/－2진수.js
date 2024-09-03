const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

let N = +input;
let ans = '';

if (N == 0) console.log('0');
else {
    while (N !== 1) {
        const temp = Math.ceil(N/-2);
        ans = temp*(-2) === N ? '0'+ans : '1'+ans;
        N = temp;
    }

    console.log('1'+ans);
}