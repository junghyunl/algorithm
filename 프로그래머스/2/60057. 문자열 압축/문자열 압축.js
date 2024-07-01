function solution(s) {
    const n = s.length;
    let res = 0;
    var answer = n;
    
    for (let i = 1; i <= Math.floor(n/2); i++) {
        let strLen = n;
        let curStr = s.slice(0, i);
        let isRepeat = 0;
        let j = i;
        while (j <= n-i) {
            if (curStr === s.slice(j, j+i)) {
                strLen -= i;
                isRepeat += 1;
                j += i;
                continue;
            }
            if (isRepeat > 0) {
                strLen += (isRepeat+1).toString().length;
                isRepeat = 0;
            }
            curStr = s.slice(j, j+i);
            j += i;
        }
        if (isRepeat > 0) strLen += (isRepeat+1).toString().length;
        
        if (strLen < answer) answer = strLen;
    }
    
    return answer;
}