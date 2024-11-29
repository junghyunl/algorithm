function cnt(n) {
    if (n === 0) return 1;
    return 5**n + cnt(n-1);
}

function solution(word) {
    var answer = 0;
    let alphabet = ['A', 'E', 'I', 'O', 'U'];
    let result;
    
    for (let i = 0; i < word.length; i++) {
        answer += alphabet.indexOf(word[i]) * cnt(4-i) + 1
    }
    
    return answer;
}