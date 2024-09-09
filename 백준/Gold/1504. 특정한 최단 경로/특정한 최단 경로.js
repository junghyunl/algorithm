//특정한 최단 경로

const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, E] = input[0].split(' ').map(Number);

const adjList = Array.from({ length: N+1 }, () => []);
for (let i = 0; i < E; i++) {
    const [from, to, weight] = input[1 + i].split(' ').map(Number);
    adjList[from].push([to, weight]);
    adjList[to].push([from, weight]);
}

const [U, V] = input[E + 1].split(' ').map(Number);

console.log(getMinDistance(adjList, U, V));

function getMinDistance(list, v1, v2) {
    let minDistance = Array(N + 1).fill(Infinity);
    let visited = Array(N + 1).fill(false);
    minDistance[v1] = 0;
    let min = 0, stopOver = 0, ans1 = 0, ans2 = 0;

    for (let i = 0; i < N; i++) {
        min = Infinity;
        stopOver = -1;

        for (let j = 1; j < N+1; j++) {
            if (!visited[j] && minDistance[j] < min) {
                min = minDistance[j];
                stopOver = j;
            }
        }
        
        if (stopOver === -1) break;
        visited[stopOver] = true;

        for (let node of list[stopOver]) {
            if (minDistance[node[0]] > min + node[1]) {
                minDistance[node[0]] = min + node[1];
            }
        }
    }

    ans1 += minDistance[1] + minDistance[v2];
    ans2 += minDistance[N];

    minDistance = Array(N + 1).fill(Infinity);
    visited = Array(N + 1).fill(false);
    minDistance[v2] = 0;
    min = 0, stopOver = 0;

    for (let i = 0; i < N; i++) {
        min = Infinity;
        stopOver = -1;

        for (let j = 1; j < N+1; j++) {
            if (!visited[j] && minDistance[j] < min) {
                min = minDistance[j];
                stopOver = j;
            }
        }
        
        if (stopOver === -1) break;
        visited[stopOver] = true;

        for (let node of list[stopOver]) {
            if (minDistance[node[0]] > min + node[1]) {
                minDistance[node[0]] = min + node[1];
            }
        }
    }

    ans1 += minDistance[N];
    ans2 += minDistance[1] + minDistance[v1];

    const ans = Math.min(ans1, ans2);
    return ans === Infinity ? -1 : ans;
}