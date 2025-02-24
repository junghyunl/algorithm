function solution(sticker) {
    
    const N = sticker.length;
    
    if (N < 4) return Math.max(...sticker);
    
    const dp1 = Array(N);
    const dp2 = Array(N);
    
    dp1[0] = sticker[0], dp1[1] = Math.max(dp1[0], sticker[1]);
    dp2[N-1] = sticker[N-1], dp2[N-2] = Math.max(dp2[N-1], sticker[N-2]);
    
    for (let i = 2; i < N-1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2]+sticker[i]);
        dp2[N-1-i] = Math.max(dp2[N-i], dp2[N-i+1]+sticker[N-1-i]);
    }
    
    return Math.max(dp2[1], dp1[N-2]);
}