function solution(n, edge) {
    
    const adjList = Array.from({length: n+1}, () => []);
    
    edge.forEach(([v, u]) => {
        adjList[v].push(u);
        adjList[u].push(v);
    });
    
    const q = [[1, 0]];
    let idx = 0;
    
    const visited = Array(n+1).fill(false);
    visited[1] = true;
    
    let ans = 0, dist = 0;
    
    while (idx < q.length) {
        const [curNode, curDist] = q[idx++];
        
        if (curDist > dist) {
            ans = 0;
            dist = curDist;
        }
        
        ans++;
        
        for (let next of adjList[curNode]) {
            if (!visited[next]) {
                visited[next] = true;
                q.push([next, curDist+1]);
            }
        }
    }
    
    return ans;
}