function solution(m, n, puddles) {
    const dp = Array.from({length:n}, () => Array(m).fill(-1));
    puddles.forEach((item) => dp[item[1]-1][item[0]-1] = 0);
    
    let pos = true;
    for (let i = 0; i < n; i++) {
        if (dp[i][0] === 0) pos = false;
        dp[i][0] = pos ? 1 : 0;
    }
    pos = true;
    for (let i = 1; i < m; i++) {
        if (dp[0][i] === 0) pos = false;
        dp[0][i] = pos ? 1 : 0;
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (dp[i][j] === 0) continue;
            dp[i][j] = (dp[i-1][j] + dp[i][j-1])%1000000007;
        }
    }
    
    return dp[n-1][m-1];
}