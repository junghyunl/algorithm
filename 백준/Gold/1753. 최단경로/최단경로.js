const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [V, E] = input[0].split(' ').map(Number);
const S = +input[1];

const adjList = Array.from({ length: V+1 }, () => []);
for (let i = 0; i < E; i++) {
    const [from, to, weight] = input[i+2].split(' ').map(Number);
    adjList[from].push([to, weight]);
}

console.log(getMinDistance(adjList));

function getMinDistance(list) {
    const minDistance = Array(V+1).fill(Infinity);
    const visited = Array(V+1).fill(false);
    minDistance[S] = 0;
    let min = 0, stop = 0, ans = '';

    for (let i = 0; i < V; i++) {
        min = Infinity;
        stop = -1;

        for (let j = 1; j < V+1; j++) {
            if (!visited[j] && minDistance[j] < min) {
                min = minDistance[j];
                stop = j;
            }
        }

        if (stop === -1) break;
        visited[stop] = true;

        for (let node of list[stop]) {
            if (minDistance[node[0]] > min + node[1]) {
                minDistance[node[0]] = min + node[1];
            }
        }
        
    }

    for (let i = 1; i < V+1; i++) {
        ans += minDistance[i] === Infinity ? 'INF\n' : minDistance[i] + '\n';
    }
    
    return ans;
}