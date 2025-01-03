function solution(s) {
    var answer = [0,0];
    
    while (s !== '1') {
        answer[0]++;
        answer[1] += s.split('0').length - 1;
        s = String(s.replace(/0/g,'').length.toString(2));
    }
    
    return answer;
}