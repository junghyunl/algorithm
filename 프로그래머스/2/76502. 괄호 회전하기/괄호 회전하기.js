function solution(s) {
    var answer = 0;
    const left = ['(','[','{'];
    const right = [')',']','}'];
    let arr;
    
    for (let i = 0; i < s.length; i++) {
        arr = [];
        for (j of s) {
            arr.push(j);
            if (left.includes(j)) {
                continue;
            }
            if (arr[arr.length-2] === left[right.indexOf(j)]) {
                arr.pop();
                arr.pop();
                continue;
            }
            break;
        }
        if (arr.length === 0) answer++;
        s = s.slice(1) + s[0];
    }
    return answer;
}