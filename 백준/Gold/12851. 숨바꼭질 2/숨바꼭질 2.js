const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
//  /dev/stdin

const [n, k] = input.split(' ').map(Number);
let moveCount = new Array(100001).fill(0);

let idx = 0;
const queue = [[n, 0]];

while (queue[idx++][0] !== k) {
    const [x, cnt] = queue[idx - 1];
    if (x < 0 || x > 100000) continue;
    if (moveCount[x] > 0 && moveCount[x] < cnt) continue;
    moveCount[x] = cnt;
    queue.push([2 * x, cnt + 1]);
    queue.push([x + 1, cnt + 1]);
    queue.push([x - 1, cnt + 1]);
}

const time = queue[idx-1][1];
console.log(time);
let answer = 1;
while (queue[idx]?.[1] === time) {
    if (queue[idx][0] === k) answer++;
    idx++
}
console.log(answer);