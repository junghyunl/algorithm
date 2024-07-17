const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const t = +input[0];
for (let i = 0; i < t; i++) {
    const n = +input[1 + i * 3];
    let firstLine = input[2 + i * 3].split(' ').map(Number);
    let secondLine = input[3 + i * 3].split(' ').map(Number);
    firstLine[1] += secondLine[0];
    secondLine[1] += firstLine[0];

    
    for (let j = 2; j < n; j++) {
        firstLine[j] += Math.max(secondLine[j - 1], secondLine[j - 2]);
        secondLine[j] += Math.max(firstLine[j - 1], firstLine[j - 2]);
    }

    console.log(Math.max(firstLine[n-1],(firstLine[n-2]||0),secondLine[n-1],(secondLine[n-2]||0)))
}