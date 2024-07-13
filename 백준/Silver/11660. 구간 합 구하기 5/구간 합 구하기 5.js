const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
let table = input.slice(1,n+1).map(a => a.split(' ').map(Number));

let sumArr = Array.from({length:n}, ()=>Array(n).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        sumArr[i][j] = table[i][j] + (sumArr[i][j-1] || 0) + (sumArr[i-1]?.[j] || 0) - (sumArr[i-1]?.[j-1] || 0);
    }
}

for (let i = 0; i < m; i++) {
    const [x1, y1, x2, y2] = input[1+n+i].split(' ').map(a => +a -1);
    console.log(sumArr[x2][y2] - (sumArr[x1-1]?.[y2] || 0) - (sumArr[x2][y1-1] || 0) + (sumArr[x1-1]?.[y1-1] || 0));
}