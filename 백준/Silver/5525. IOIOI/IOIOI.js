const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = [+input[0], +input[1]];
const [Pn, Pn_1] = ['IO'.repeat(n)+'I', 'IO'.repeat(n-1)+'I'];
let s = input[2].trim();

let result = 0;
while (s.replace(Pn, Pn_1) !== s) {
    s = s.replace(Pn, Pn_1);
    result++;
}
console.log(result);
