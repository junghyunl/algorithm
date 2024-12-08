function solution(s){
    var answer = true;
    let cnt = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            cnt++;
            continue;
        }
        if (s[i] === ')') {
            cnt--;
        }
        if (cnt < 0) {
            answer = false;
            break;
        }
    }
    if (cnt !== 0) answer = false;
    return answer;
}