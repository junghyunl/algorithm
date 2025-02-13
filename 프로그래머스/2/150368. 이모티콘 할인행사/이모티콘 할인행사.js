function solution(users, emoticons) {
    const ans = [0, 0];
    
    const [N, M] = [users.length, emoticons.length];
    const costs = Array(N).fill(0);
    
    const combi = (depth) => {
        if (depth === M) {
            
            const sale = [0, 0];
            
            for (let i = 0; i < N; i++) {
                costs[i] >= users[i][1] ? sale[0]++ : sale[1] += costs[i];
            }
            
            if (sale[0] > ans[0]) {
                ans[0] = sale[0];
                ans[1] = sale[1];
            } else if (sale[0] === ans[0] && sale[1] > ans[1]) {
                ans[1] = sale[1];
            }
            
            return;
        }
        
        for (let i = 1; i <= 4; i++) {
            
            for (let j = 0; j < N; j++) {
                if (users[j][0] <= i*10) {
                    costs[j] += emoticons[depth]*(10-i)/10;
                }
            }
            
            combi(depth+1);
            
            for (let j = 0; j < N; j++) {
                if (users[j][0] <= i*10) {
                    costs[j] -= emoticons[depth]*(10-i)/10;
                }
            }
            
        }
    }
    
    combi(0);
    return ans;
}