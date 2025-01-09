function solution(arr) {
    const N = Math.floor(arr.length/2)+1;
    const dp = Array.from({length:N}, () => Array(N));
    const isPlus = Array(N).fill(false);
    isPlus[0] = true;
    
    for (let i = 0; i < N-1; i++) {
        if (arr[i*2+1] === "+") {
            isPlus[i+1] = true;
        }
    }
        
    for (let i = 0; i < N; i++) {
        if (isPlus[i]) {
            dp[i].fill(-Infinity);
        } else {
            dp[i].fill(Infinity);
        }

        dp[i][i] = +arr[i*2];
    }
    
    const dfs = (start, end) => {
        if (dp[start][end] > -Infinity && dp[start][end] < Infinity) return dp[start][end];
        
        if (isPlus[start]) {
            for (let i = start; i < end; i++) {
                dp[start][end] = Math.max(dp[start][end], isPlus[i+1] ? dfs(start, i) + dfs(i+1, end) : dfs(start, i) - dfs(i+1, end));
            }
        } else {
            for (let i = start; i < end; i++) {
                dp[start][end] = Math.min(dp[start][end], isPlus[i+1] ? dfs(start, i) + dfs(i+1, end) : dfs(start, i) - dfs(i+1, end));
            }
        }
        return dp[start][end];
    }
        
    dfs(0, N-1);
    const ans = dp[0][N-1];
    return ans;
}