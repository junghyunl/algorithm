function solution(x, y, n) {
    const d = {};
    d[x] = 0;
    
    for (let i = x; i < y; i++) {
        if (d[i] > -1) {
            d[i+n] = Math.min(d[i]+1, (d[i+n] || 1000000));
            d[i*2] = Math.min(d[i]+1, (d[i*2] || 1000000));
            d[i*3] = Math.min(d[i]+1, (d[i*3] || 1000000));
        }
    }
    return d[y] > -1 ? d[y] : -1;
}