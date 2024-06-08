const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const m = Number(input[1]);
let arr = input[2].split(' ').map(Number);

let answer = 0;
for (let i = 0; i < m; i++) {
    answer += arr[i]*a**(m-i-1);
}

let k = 0;
while (Math.floor(answer/b**k) > 0) {
    k++;
}

let bArr = [];
while (k>0) {
    k--;
    bArr.push(Math.floor(answer/b**k));
    answer %= b**k;
}
console.log(bArr.join(' '));