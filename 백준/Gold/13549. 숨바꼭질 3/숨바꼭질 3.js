const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin
const [n, k] = input.split(' ').map(Number);
let visited = new Array(100001).fill(false);

let idx = 0;
const queue = [[n, 0]];
while (queue[idx++][0] !== k) {
    const [x, cnt] = [queue[idx-1][0], queue[idx-1][1]];
    if (x < 0 || x > 100000) continue;
    if (visited[x]) continue;
    visited[x] = true;
    queue.push([2 * x, cnt]);
    queue.push([x-1, cnt+1]);
    queue.push([x+1, cnt+1]);
}
console.log(queue[idx-1][1]);