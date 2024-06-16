const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = [+input[0], +input[1]];
const Pn = 'IO'.repeat(n)+'I';
let s = input[2].trim();

let result = 0;
for (let i = 0; i < m+2*n; i++) {
    if (s[i] === 'O') continue;
    if (s.slice(i,i+2*n+1) === Pn) {
        result++;
        while (s[i+2*n+1] === 'O' && s[i+2*n+2] === 'I') {
            result++;
            i+=2;
        }
        i+=2*n;
    }
}
console.log(result);