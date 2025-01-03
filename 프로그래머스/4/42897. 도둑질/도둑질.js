function solution(money) {
    const N = money.length;
    const dp1 = Array(N);
    const dp2 = Array(N);
    dp1[0] = money[0], dp1[1] = Math.max(dp1[0], money[1]), dp1[2] = Math.max(dp1[0]+money[2], dp1[1]);
    dp2[0] = money[N-1], dp2[1] = Math.max(dp2[0], money[N-2]), dp2[2] = Math.max(dp2[0]+money[N-3], dp2[1]);
    
    for(let i = 3; i < N-1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2]+money[i], dp1[i-3]+money[i]);
        dp2[i] = Math.max(dp2[i-1], dp2[i-2]+money[N-1-i], dp2[i-3]+money[N-1-i]);
    }
    
    return Math.max(dp1[N-2], dp2[N-2]);
}