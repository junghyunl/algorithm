function solution(routes) {
    
    const N = routes.length;
    routes.sort((a,b) => a[0] === b[0] ? a[0]-b[0] : a[1]-b[1]);
    
    let end = routes[0][1], ans = 1;
    
    for (let i = 1; i < N; i++) {
        if (routes[i][0] > end) {
            end = routes[i][1];
            ans++;
        }
    }
    
    return ans;
}