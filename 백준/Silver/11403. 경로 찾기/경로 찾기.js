const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin
const n = +input[0];
const nodeInfo = input.slice(1).map(line => line.split(' ').join(''));
let node = Array.from({length:n}, () => []);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (nodeInfo[i][j] === '1') node[i].push(j);
    }
}

function dfs(v) {
    let visited = new Array(n).fill(0);
    let stack = [v];

    while (stack.length > 0) {
        const curNode = stack.pop();

        for (let i of node[curNode]) {
            if (visited[i] === 1) continue;
            visited[i] = 1;
            stack.push(i);
        }
    }
    console.log(visited.join(' '));
}

for (let i = 0; i < n; i++) {
    dfs(i);
}