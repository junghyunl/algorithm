const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const [n, m] = input[0].split(' ').map(Number);
let user = Array.from({length:n+1}, () => []);

for (let i = 0; i < m; i++) {
    const [a, b] = input[i+1].split(' ').map(Number);
    user[a].push(b);
    user[b].push(a);
}

function bfs(v) {
    let queue = [v];
    let bacon = new Array(n+1).fill(-1);
    bacon[v] = 0;

    while (queue.length > 0) {
        const node = queue.shift();

        for (let i of user[node]) {
            if (bacon[i] === -1) {
                queue.push(i);
                bacon[i] = bacon[node] + 1;
            }
        }
    }
    return bacon.filter(a => a > -1).reduce((a,b) => a+b);
}

let CabinVacon = [];
for (let i = 1; i <= n; i++) {
    CabinVacon.push(bfs(i));
}

console.log(CabinVacon.indexOf(Math.min(...CabinVacon))+1);