function solution(storey) {
    var answer = 0;
    
    while (storey !== 0) {
        const num = Math.abs(storey - Math.round(storey/10)*10);
        answer += num;
        if (num === 5 && Math.floor(storey/10)%10<5) {
            storey = Math.floor(storey/10);
        }else {
            storey = Math.round(storey/10);
        }
    }
    
    return answer;
}