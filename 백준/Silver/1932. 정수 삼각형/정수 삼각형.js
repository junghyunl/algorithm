const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
n = +input[0];
let triangle = input.slice(1).map(a => a.split(' ').map(Number));

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i+1; j++) {
        triangle[i][j] = triangle[i][j] + Math.max((triangle[i-1][j-1] || 0),(triangle[i-1][j] || 0));
        
    }
    
}

console.log(Math.max(...triangle[n-1]));