const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M] = [+input[0], +input[1]];
const adjList = Array.from({length:N+1}, () => []);

for (let i = 0; i < M; i++) {
    const [from, to, weight] = input[2+i].split(' ').map(Number);
    adjList[from].push([to, weight]);
}

const [S, E] = input[M+2].split(' ').map(Number);

console.log(getMinDistance(adjList, S, E));

function getMinDistance(list, start, end) {
    const minDistance = Array(N+1).fill(Infinity);
    const visited = Array(N+1).fill(false);
    minDistance[start] = 0;
    let min = 0, stopOver = 0;

    for (let i = 0; i < N; i++) {
        min = Infinity;
        stopOver = -1;

        for (let j = 1; j <= N; j++) {
            if (!visited[j] && min > minDistance[j]) {
                min = minDistance[j];
                stopOver = j;
            }
        }
        
        if(stopOver == -1) break;
        visited[stopOver] = true;

        for (let node of list[stopOver]) {
            if (minDistance[node[0]] > min + node[1]) {
                minDistance[node[0]] = min + node[1];
            }
        }
    }
    return minDistance[end];
}