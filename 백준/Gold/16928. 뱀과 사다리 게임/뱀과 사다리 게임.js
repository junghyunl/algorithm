const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
let [laddle, snake, pass] = [{}, {}, []];

for (let i = 0; i < n; i++) {
    const [x, y] = input[i+1].split(' ').map(Number);
    pass.push(x);
    laddle[y] = x;
}
for (let i = 0; i < m; i++) {
    const [u, v] = input[n+1+i].split(' ').map(Number);
    snake[u] = v;
}

function minValue(num) {
    return Math.min(...d.slice(num-6 > 0 ? num-6 : 1, num))+1;
}

let d = new Array(101).fill(101);
d[1] = 0;
for (let i = 2; i <= 100; i++) {
    if (pass.includes(i)) continue;
    if (snake[i]) d[snake[i]] = Math.min(minValue(i), d[snake[i]]);
    else if (laddle[i]) {
        d[i] = Math.min(minValue(i), minValue(laddle[i]));
    }
    else d[i] = minValue(i);
}

console.log(d[100]);