function solution(n, computers) {
    const list = Array.from({length: n}, () => []);
    const visited = Array(n).fill(false);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && computers[i][j] === 1) list[i].push(j);
        }
    }
    
    const dfs = (node) => {
        visited[node] = true;
        
        for (let next of list[node]) {
            if (!visited[next]) dfs(next);
        }
    }
    
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            ans++;
        }
    }
    
    return ans;
}