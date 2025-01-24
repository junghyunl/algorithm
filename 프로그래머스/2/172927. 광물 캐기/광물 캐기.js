function solution(picks, minerals) {
    
    const N = picks.reduce((a,b) => a+b);
    const M = Math.min(N, Math.floor(minerals.length/5)+1);
    const tiredness = Array.from({length:Math.min(N, M)}, () => Array(3).fill(0));
    
    for (let i = 0, size = Math.min(N*5, minerals.length); i < size; i++) {
        
        const index = Math.floor(i/5);
        
        switch (minerals[i]) {
            case 'diamond':
                tiredness[index][0] += 1;
                tiredness[index][1] += 5;
                tiredness[index][2] += 25;
                break;
            case 'iron':
                tiredness[index][0] += 1;
                tiredness[index][1] += 1;
                tiredness[index][2] += 5;
                break;
            case 'stone':
                tiredness[index][0] += 1;
                tiredness[index][1] += 1;
                tiredness[index][2] += 1;
                break;
        }
    }
    
    let ans = Infinity;
    
    const permutation = (depth, pickArr, total) => {
        if (depth === M) {
            ans = Math.min(ans, total);
            return;
        }
        for (let i = 0; i < 3; i++) {
            if (pickArr[i] > 0) {
                pickArr[i]--;
                permutation(depth+1, pickArr, total+tiredness[depth][i]);
                pickArr[i]++;
            }
        }
    }
    
    permutation(0, picks, 0);
    return ans;
}