function solution(n) {
    if (n%2 === 1) return 0;
    
    const dp = Array(n/2+1);
    const sum = Array(n/2+1);
    dp[0] = sum[0] = 1;
    dp[1] = 3;
    sum[1] = dp[1] + sum[0];
    
    for (let i = 2; i <= n/2; i++) {
        dp[i] = (dp[i-1]*3+sum[i-2]*2)%1000000007;
        sum[i] = (dp[i] + sum[i-1])%1000000007;
    }
    return dp[n/2];
}