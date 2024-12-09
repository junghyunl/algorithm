function solution(name) {
    const N = name.length;
    let cnt = N-1-name.split('').reverse().findIndex(c => c !== 'A');
    
    const getClickCnt = (c) => {
        return Math.min(c.charCodeAt()-'A'.charCodeAt(), 'A'.charCodeAt()+26-c.charCodeAt());
    }

    let ans = getClickCnt(name[0]), len = 0;
    for (let i = 1; i < N; i++) {
        if (name[i] === 'A') len++;
        else {
            if (len > 0) {
                cnt = Math.min(cnt, N-1-len+Math.min(N-i, i-len-1));
                len = 0;
            }
            ans += getClickCnt(name[i]);
        }
    }
    
    return cnt === N ? ans : ans+cnt;
}