function solution(players, m, k) {
    let ans = 0, curServerCnt = 0;
    
    const q = [];
    
    for (let i = 0; i < 24; i++) {
        if (q.length > 0 && q[0][0] === i) {
            curServerCnt -= q[0][1];
            q.shift();
        }
        
        if (Math.floor(players[i]/m) > curServerCnt) {
            const createServerCnt = Math.floor(players[i]/m) - curServerCnt;
            ans += createServerCnt;
            curServerCnt += createServerCnt;
            q.push([i+k, createServerCnt])
        }
    }
    
    return ans;
}