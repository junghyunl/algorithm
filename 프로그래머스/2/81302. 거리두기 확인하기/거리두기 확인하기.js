function solution(places) {
    
    const dy = [-1,1,0,0];
    const dx = [0,0,-1,1];
    
    const bfs = (a, b, map) => {
        const q = [[a,b,0]];
        let idx = 0;
        
        while (idx < q.length) {
            const [y, x, dist] = q[idx++];
            
            for (let i = 0; i < 4; i++) {
                const [ny, nx] = [y+dy[i], x+dx[i]];
                if (ny < 0 || ny >= 5 || nx < 0 || nx >= 5) continue;
                if (map[ny][nx] === 'O' && dist === 0) {
                    q.push([ny,nx,dist+1]);
                } else if (map[ny][nx] === 'P' && (ny !== a || nx !== b)) return false;
            }
        }
        return true;
    }
    
    const check = (map) => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (map[i][j] === 'P' && !bfs(i,j,map)) return false;
            }
        }
        return true;
    }
    
    const ans = [];
    
    places.forEach(map => {
        ans.push(check(map) ? 1 : 0);
    })
    
    return ans;
}