function solution(n, wires) {
    const m = wires.length;
    
    const adjList = Array.from({length:n+1}, () => []);
    for (let i = 0; i < m; i++) {
        const [from, to] = wires[i];
        adjList[from].push(to);
        adjList[to].push(from);
    }
    
    let answer = Infinity;
    const visited = Array(n+1).fill(false);
    for (let i = 0; i < m; i++) {
        visited.fill(false);
        const [from, to] = wires[i];
        
        let sum = dfs(1, from, to);
        for (let j = 2; j < n+1; j++) {
            if (!visited[j]) {
                sum = Math.abs(sum - dfs(j, from, to));
                break;
            }
        }
        answer = Math.min(answer, sum);
    
    }
    function dfs(node, from, to) {
        let cnt = 1;
        visited[node] = true;
        
        for (let next of adjList[node]) {
            if ((node === from && next === to) || (node === to && next === from)) continue;
            if (!visited[next]) {
                cnt += dfs(next, from, to);
            }
        }
        return cnt;
    }
         
    return answer;
}