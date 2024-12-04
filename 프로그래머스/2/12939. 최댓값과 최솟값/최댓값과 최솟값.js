function solution(s) {
    var answer = '';
    s = s.split(' ');
    answer = String(Math.min(...s)) + ' ' + String(Math.max(...s));
    return answer;
}