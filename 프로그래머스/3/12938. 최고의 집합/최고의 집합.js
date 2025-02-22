function solution(n, s) {
    
    if (s < n) return [-1];
    
    let ans = Array(n).fill(Math.floor(s/n));
    
    s -= Math.floor(s/n)*n;
    
    for (let i = n-s; i < n; i++) {
        ans[i]++;
    }
    
    return ans;
}