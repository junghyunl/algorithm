function solution(s) {
    var answer = s.toLowerCase().split('');;
    answer[0] = answer[0].toUpperCase();
    
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === ' ' && i < answer.length-1) {
            answer[i+1] = answer[i+1].toUpperCase();
        }
    }
        
    return answer.join('');
}