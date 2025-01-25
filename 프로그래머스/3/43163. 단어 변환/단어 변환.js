function solution(begin, target, words) {
    
    if (!words.includes(target)) return 0;
    
    const N = words.length;
    
    const isSimilar = (firstWord, secondWord) => {
        
        let count = 0;
        const M = firstWord.length;
        
        for (let i = 0; i < M; i++) {
            if (firstWord[i] !== secondWord[i]) count++;
            if (count > 1) return false;
        }
        
        return true;
    }
    
    let ans = Infinity;
    
    const permutation = (cur, cnt, flag) => {
        if (cur === target) {
            ans = Math.min(ans, cnt);
            return;
        }
        for (let i = 0; i < N; i++) {
            if ((flag & 1<<i) === 0 && isSimilar(cur, words[i])) {
                permutation(words[i], cnt+1, flag|1<<i);
            }
        }
    }
    
    permutation(begin, 0, 0);

    return ans;
}