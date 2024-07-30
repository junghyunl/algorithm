const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const cost = input.slice(1).map(a => a.split(' ').map(Number));

const city = Array.from({length:n}, () => []);
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(cost[i][j] === 0) continue;
        city[i].push([j, cost[i][j]]);
    }
    
}

const answer = new Set();
let visited = new Array(n).fill(false);

function dfs(node, total, departure) {
    if (visited[node] === true) {
        if (node === departure && visited.every(a => a === true)) answer.add(total);
        return;
    }
    visited[node] = true;
    for (let i of city[node]) {
        dfs(i[0], total+i[1], departure);
    }
    visited[node] = false;
}

for (let i = 0; i < n; i++) {
    dfs(i, 0, i);
}

console.log(Math.min(...answer));