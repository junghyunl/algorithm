const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const tc = +input[0];
let queue, arr;

const command = ['D', 'S', 'L', 'R'];
function DSLR(num, s, option) {
    let newNum;
    if (option === 'D') newNum = num * 2 % 10000;
    else if (option === 'S') newNum = (num + 9999) % 10000;
    else if (option === 'L') newNum = +(num.toString().padStart(4,'0').slice(1) + num.toString().padStart(4,'0')[0]);
    else if (option === 'R') newNum = +(num.toString().padStart(4,'0').slice(-1) + num.toString().padStart(4,'0').slice(0, -1));

    if (!arr[newNum]) {
        arr[newNum] = true;
        queue.push([newNum, s + option]);
    }
}

for (let i = 0; i < tc; i++) {
    const [a, b] = input[i + 1].split(' ').map(Number);
    arr = new Array(10000).fill(false);
    arr[a] = true;

    queue = [[a, '']];
    let idx = 0;
    while (!arr[b]) {
        const [n, str] = queue[idx++];
        for (let j of command) {
            DSLR(n,str,j);
        }
    }
    idx = queue.length-1;
    while (queue[idx][0] !== b) idx--;

    console.log(queue[idx][1]);
}