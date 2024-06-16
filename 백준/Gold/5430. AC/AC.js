const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const tc = +input[0];

function AC(p, n, arr) {
    if (p.split('D').length-1 > n) return 'error';
    const m = p.length;
    let status = 0;
    let statusArr = [0, 0];
    for (let i = 0; i < m; i++) {
        if (p[i] === 'D') statusArr[status]++;
        else if (p[i] === 'R') {
            if (status === 0) status = 1;
            else if (status === 1) status = 0;
        }
    }
    arr = arr.slice(statusArr[0],n-statusArr[1]);
    return (p.split('R').length-1)%2 === 1 ? '[' + arr.reverse().join(',') + ']' : '[' + arr.join(',') + ']'
}

for (let i = 0; i < tc; i++) {
    console.log(AC(input[i*3+1],input[i*3+2],input[i*3+3].split(/[,\[\]]/).filter(Boolean)));
}