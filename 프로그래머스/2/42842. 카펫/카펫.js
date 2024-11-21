function solution(brown, yellow) {
    var answer = [];
    
    for (let i = 3; i < Math.floor((brown+yellow)**0.5)+1; i++) {
        if ((brown+yellow)%i === 0) {
            if (i + (brown+yellow)/i === brown/2 + 2) {
                answer.push(i);
                answer.push((brown+yellow)/i);
                break;
            }
        }
    }
    
    return answer.sort((a,b) => {
        return b-a;
    });
}