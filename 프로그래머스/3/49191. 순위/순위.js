function solution(n, results) {
    
    const checkIn = Array(n+1).fill(false);
    const checkOut = Array(n+1).fill(false);
    const inAdjList = Array.from({length:n+1}, () => []);
    const outAdjList = Array.from({length:n+1}, () => []);
    
    results.forEach(([a, b]) => {
        inAdjList[a].push(b);
        checkOut[a] = true;
        
        outAdjList[b].push(a);
        checkIn[b] = true;
    })
    
    let visited = Array(n+1).fill(false);
    
    const dfs = (tree, node) => {
        visited[node] = true;
        
        let result = 1;
        
        for (let next of tree[node]) {
            if (!visited[next]) {
                result += dfs(tree, next);
            }
        }
        
        return result;
    }
    
    let ans = 0;
    
    for (let i = 1; i < n+1; i++) {
        visited = Array(n+1).fill(false);
        
        if (dfs(inAdjList, i) + dfs(outAdjList, i) === n+1) ans++;
    }
    
    return ans;
}