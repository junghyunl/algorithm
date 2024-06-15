const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
let tree = input[1].split(' ').map(Number);

let [start, end] = [0, Math.max(...tree)];

while (start <= end) {
    let mid = Math.floor((start+end)/2);

    let total = 0;
    for (let i of tree) {
        total += Math.max(i-mid, 0);
    }
    if (total >= m) {
        start = mid + 1;
    }
    else end = mid - 1;
}
console.log(end);