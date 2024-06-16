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
    let bacon = new Array(n+1).fill(0);
    bacon[v] = 0;

    let queue = [v];
    let visited = new Array(n+1).fill(false);
    while (queue.length > 0) {
        const node = queue.shift();
        if (visited[node] === true) continue;
        visited[node] = true;

        for (let i of user[node]) {
            if (visited[i] === true) continue;
            if (bacon[i] === 0) {
                queue.push(i);
                bacon[i] = bacon[node] + 1;
            }
        }
    }
    return bacon.reduce((a,b) => a+b);
}

let CabinVacon = [];
for (let i = 1; i <= n; i++) {
    CabinVacon.push(bfs(i));
}

console.log(CabinVacon.indexOf(Math.min(...CabinVacon))+1);