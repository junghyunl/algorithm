function solution(n) {
    var answer = n+1;
    
    while (n.toString(2).toString().split('1').length-1 !== answer.toString(2).toString().split('1').length-1) {
        answer++;
    }
    
    return answer;
}