function rvs(s) {
    let res = '';
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') res += ')';
        else res += '(';
    }
    return res
}

function solution(p) {
    if (p === '') return '';
    const n = p.length;
    let cnt = 0;
    let isNotCorrect = 0;
    
    for (let i = 0; i < n; i++) {
        if (p[i] === '(') cnt++;
        else if (p[i] === ')') cnt--;
        if (cnt < 0) isNotCorrect = 1;
        else if (cnt === 0) {
            if (isNotCorrect === 0) return p.slice(0,i+1) + solution(p.slice(i+1));
            else return '(' + solution(p.slice(i+1)) + ')' + rvs(p.slice(1,i));
        }
    }
}