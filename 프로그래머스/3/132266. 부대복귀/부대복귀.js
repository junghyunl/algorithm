function solution(n, roads, sources, destination) {
    
    const adjList = Array.from({length: n+1}, () => []);
    roads.forEach(([a, b]) => {
        adjList[a].push(b);
        adjList[b].push(a);
    })
    
    const dist = Array(n+1).fill(-1);
    
    const visited = Array(n+1).fill(false);
    visited[destination] = true;
    
    const q = [[destination, 0]];
    let idx = 0;
    
    while (idx < q.length) {
        const [node, curDist] = q[idx++];
        dist[node] = curDist;
        
        for (let next of adjList[node]) {
            if (!visited[next]) {
                visited[next] = true;
                q.push([next, curDist+1]);
            }
        }
    }
    
    const ans = sources.map(a => dist[a]);
    
    return ans;
}