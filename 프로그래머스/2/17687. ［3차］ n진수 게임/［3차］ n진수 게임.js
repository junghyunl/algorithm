function solution(n, t, m, p) {
    var answer = '';
    let i = 0;
    while (answer.length < t*m) {
        answer += i.toString(n).toUpperCase();
        i++;
    }
    
    return answer.split('').filter((a,b) => b%m === p-1).join('').slice(0,t);
}