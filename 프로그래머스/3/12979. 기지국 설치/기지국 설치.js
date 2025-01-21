function solution(n, stations, w) {
    
    const m = stations.length;
    let end = 0, ans = 0;
    
    for (let i = 0; i < m; i++) {
        while (end < stations[i]-w-1) {
            end += 2*w+1;
            ans++;
        }
        end = stations[i]+w;
    }
    
    while (end < n) {
            end += 2*w+1;
            ans++;
        }
    
    return ans;
}