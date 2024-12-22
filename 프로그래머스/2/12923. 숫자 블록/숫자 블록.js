function solution(begin, end) {
    const ans = Array(end-begin+1).fill(1);
    for (let i = begin; i <= end; i++) {
        if (i%2 === 0 && i/2 <= 10000000) ans[i-begin] = i/2;
        else {
            for (let j = 2; j <= Math.floor(i**0.5); j++) {
                if (i%j === 0) {
                    if (i/j > 10000000) ans[i-begin] = j;
                    else {
                        ans[i-begin] = i/j;
                        break;
                    }
                }
            }
        }
    }
    if (begin === 1) ans[0] = 0;
    return ans;
}