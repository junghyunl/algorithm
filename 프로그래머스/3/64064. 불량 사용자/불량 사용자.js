function solution(user_id, banned_id) {
    
    const [N, M] = [user_id.length, banned_id.length];
    const ans = new Set();
    
    const check = (userId, bannedId) => {
        if (userId.length !== bannedId.length) return false;
        
        const len = userId.length;
        
        for (let i = 0; i < len; i++) {
            if (bannedId[i] === '*') continue;
            if (userId[i] !== bannedId[i]) return false;
        }
        
        return true;
    }
    
    const permutation = (depth, flag) => {
        if (depth === M) {
            ans.add(flag);
            return;
        }
        
        for (let i = 0; i < N; i++) {
            if ((flag & 1<<i) === 0 && check(user_id[i], banned_id[depth])) {
                permutation(depth+1, flag | 1<<i);
            }
        }
        
    }
    
    permutation(0, 0);
    return ans.size;
}