function solution(n, m, x, y, r, c, k) {
    
    const dy = [1,0,0,-1];
    const dx = [0,-1,1,0];
    const dir = ['d', 'l', 'r', 'u'];
    let pos = false, ans = 'impossible';
    
    if ((k-(Math.abs(x-r)+Math.abs(y-c)))%2 === 1) return ans;
    
    const check = (cy, cx, path) => {
        if (Math.abs(cy-r+1)+Math.abs(cx-c+1)+path.length > k) return false;
        return true;
    }
    
    const dfs = (cy, cx, path) => {
        if (pos || !check(cy, cx, path)) return;
        if (path.length === k) {
            if (cy === r-1 && cx === c-1) {
                ans = path;
                pos = true;
            }
            return;
        }
        
        for (let i = 0; i < 4; i++) {
            const [ny, nx] = [cy + dy[i], cx + dx[i]];
            
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            dfs(ny, nx, path+dir[i]);
        }
    }    
    dfs(x-1, y-1, '');
    
    return ans;
}