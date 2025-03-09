function solution(info, edges) {
    
    const N = info.length;
    const tree = Array.from({length: N}, () => []);
    
    edges.forEach(([from, to]) => tree[from].push(to));
    
    let ans = 0;
    
    const dfs = (cur, path, sheepCnt, wolfCnt) => {
        if (wolfCnt >= sheepCnt) return;
        if (sheepCnt > ans) ans = sheepCnt;
        
        const newPath = path.concat(tree[cur].slice());
        const M = newPath.length;
        
        for (let i = 0; i < M; i++) {
            dfs(newPath[i], newPath.slice(0,i).concat(newPath.slice(i+1)) , sheepCnt + (!info[newPath[i]] ? 1 : 0), wolfCnt + (info[newPath[i]] ? 1 : 0));
        }
    }
    
    dfs(0, [], 1, 0);
    return ans;
}