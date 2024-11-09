function solution(N, road, K) {
    const adjMatrix = Array.from({length:N+1}, () => Array(N+1).fill(Infinity));
    road.forEach(path => {
        const [from, to, weight] = path;
        adjMatrix[from][to] = Math.min(adjMatrix[from][to], weight);
        adjMatrix[to][from] = Math.min(adjMatrix[to][from], weight);
    });

    const visited = Array(N+1).fill(false);
    const minDist = Array(N+1).fill(Infinity);
    minDist[1] = 0;
    
    for (let i = 0; i < N; i++) {
        let min = Infinity;
        let stop = -1;
        for (let j = 1; j < N+1; j++) {
            if (!visited[j] && min > minDist[j]) {
                min = minDist[j];
                stop = j;
            }
        }
        if (stop === -1) break;
        visited[stop] = true;
        
        for (let j = 1; j < N+1; j++) {
            if (!visited[j] && minDist[j] > min + adjMatrix[stop][j]) {
                minDist[j] = min + adjMatrix[stop][j];
            }
        }
    }
    
    let ans = 0;
    for (let i = 1; i < N+1; i++) {
        if (minDist[i] <= K) ans++;
    }

    return ans;
}