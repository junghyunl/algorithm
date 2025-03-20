function solution(stones, k) {
    
    const N = stones.length;
    let start = 1, end = 200000000;
    
    const jump = (value) => {
        let cnt = 0;
        for (let i = 0; i < N; i++) {
            if (stones[i] < value) {
                cnt++;
            } else {
                cnt = 0;
            }
            
            if (cnt === k) {
                return false;
            }
        }
        return true;
    }
    
    let ans = 1;
    
    while (start <= end) {
        const mid = Math.floor((start+end)/2);
        
        if (jump(mid)) {
            start = mid + 1;
            ans = Math.max(ans, mid);
        } else {
            end = mid - 1;
        }
    }
    
    return ans;
}