function cnt(n) {
    if (n === 0) return 1;
    return 5**n + cnt(n-1);
}

function solution(word) {
    let ans = 0;
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    
    for (let i = 0; i < word.length; i++) {
        ans += alphabet.indexOf(word[i]) * cnt(4-i) + 1
    }
    
    return ans;
}