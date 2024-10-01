function solution(citations) {
    var answer = citations.length;
    citations.sort((a,b) => {
        return b-a;
    })
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i+1) {
            answer = i;
            break;
        }
    }
    
    return answer;
}