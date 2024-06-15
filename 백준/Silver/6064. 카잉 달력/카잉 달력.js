const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const tc = +input[0];

function inca(n, m, x, y) {
    let year = x;
    for (let i = 0; i <= m; i++) {
        if ((year-1)%m+1 === y) break;
        year += n;
    }
    return year > n*m ? -1 : year;
}

let result = '';
for (let i = 0; i < tc; i++) {
    const [n, m, x, y] = input[i+1].split(' ').map(Number);
    result += inca(n, m, x, y).toString() + '\n';
}
console.log(result);