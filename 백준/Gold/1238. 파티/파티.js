const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, M, X] = input[0].split(' ').map(Number);

const adjFromList = Array.from({ length: N + 1 }, () => []);
const adjToList = Array.from({ length: N + 1 }, () => []);
const ans = Array(N+1).fill(0);

for (let i = 0; i < M; i++) {
    const [from, to, weight] = input[i + 1].split(' ').map(Number);
    adjFromList[from].push([to, weight]);
    adjToList[to].push([from, weight]);
}

getMinDistance(adjFromList);
getMinDistance(adjToList);
console.log(Math.max(...ans.slice(1)));

function getMinDistance(list) {
    const minDistance = Array(N+1).fill(Infinity);
    const visited = Array(N + 1).fill(false);
    minDistance[X] = 0;
    let min = 0, stop = 0;

    for (let i = 0; i < N; i++) {
        min = Infinity;
        stop = -1;
        for (let j = 1; j < N+1; j++) {
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

    for (let i = 1; i < N+1; i++) {
        ans[i] += minDistance[i];
    }
}