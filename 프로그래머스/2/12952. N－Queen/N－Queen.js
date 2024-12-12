function solution(n) {
    let ans = 0;
    const numbers = [];
    
    const check = (depth, num) => {
        for (let i = 0; i < depth; i++) {
            if (depth-i === Math.abs(num-numbers[i])) return false;
        }
        return true;
    }
    
    const dfs = (flag, depth) => {
        if (depth === n) {
            ans++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if ((flag & 1<<i) === 0 && check(depth, i)) {
                numbers[depth] = i;
                dfs(flag|1<<i, depth+1);
            } 
        } 
    }
    
    dfs(0,0);
    return ans;
}