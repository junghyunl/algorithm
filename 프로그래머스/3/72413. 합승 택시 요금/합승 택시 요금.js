function solution(n, s, a, b, fares) {
    
    const INF = Infinity;
    const graph = Array.from({length:n+1}, () => Array(n+1).fill(INF));
    
    for (let i = 1; i < n+1; i++) {
        for (let j = 1; j < n+1; j++) {
            if (i === j) {
                graph[i][j] = 0;
            }
        }
    }
    
    fares.forEach(([from, to, cost]) => {
        graph[from][to] = graph[to][from] = cost;
    })
    
    for (let i = 1; i < n+1; i++) {
        for (let j = 1; j < n+1; j++) {
            for (let k= 1; k < n+1; k++) {
                if (graph[j][i] === INF || graph[i][k] === INF) continue;
                graph[j][k] = Math.min(graph[j][k], graph[j][i]+graph[i][k]);
            }
        }
    }
    
    let ans = INF;
    for (let i = 1; i < n+1; i++) {
        if (graph[s][i] === INF || graph[i][a] === INF || graph[i][b] === INF) continue;
        ans = Math.min(ans, graph[s][i] + graph[i][a] + graph[i][b]);    
    }
    
    return ans;
}