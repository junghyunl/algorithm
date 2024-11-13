function solution(maps) {
    const [N, M] = [maps.length, maps[0].length];
    const visited = Array.from({length:N}, () => Array(M).fill(false));
    
    const dy = [-1,1,0,0];
    const dx = [0,0,-1,1];

    function bfs(a, b) {
        let cnt = +maps[a][b];
        const q = [[a, b]];
        visited[a][b] = true;
        let idx = 0;

        while(idx < q.length) {
            const [y, x] = q[idx++];

            for (let i = 0; i < 4; i++) {
                const ny = y + dy[i];
                const nx = x + dx[i];
                if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx] || maps[ny][nx] ==='X') continue;
                cnt += +maps[ny][nx];
                visited[ny][nx] = true;
                q.push([ny,nx]);
            }
        }
        return cnt;
    }
    
    
    const ans = [];
    
    for (let i = 0; i < N; i++) {   
        for (let j = 0; j < M; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) ans.push(bfs(i,j));
        }
    }
    if (ans.length === 0) ans.push(-1);
    ans.sort((a,b) => a-b);
    
    return ans;
}
