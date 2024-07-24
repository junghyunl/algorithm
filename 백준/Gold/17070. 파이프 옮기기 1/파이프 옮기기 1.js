const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const n = +input[0];
let house = input.slice(1).map(a => a.split(' ').map(b => new Array(3).fill(-b)));
let pos = 0;
if (house[n-1][n-1][0] === -1) pos = 1;

for (let i = 1; i < n; i++) {
    if (house[0][i][0] === -1) break;
    house[0][i][0] = 1;
}

for (let i = 1; i < n; i++) {
    for (let j = 2; j < n; j++) {
        if (house[i][j][0] === -1) continue;
        if (house[i][j-1][0] !== -1) house[i][j][0] += house[i][j-1][0] + house[i][j-1][1];
        if (house[i-1][j][0] !== -1) house[i][j][2] += house[i-1][j][1] + house[i-1][j][2];
        if (house[i-1][j][0] !== -1 && house[i][j-1][0] !== -1 && house[i-1][j-1][0] !== -1) house[i][j][1] += house[i-1][j-1][0] + house[i-1][j-1][1] + house[i-1][j-1][2];
    }
}

if (pos === 1) console.log(0);
else {
    const answer = house[n-1][n-1][0] + house[n-1][n-1][1] + house[n-1][n-1][2];
    console.log(answer === -0 ? 0 : answer);
}