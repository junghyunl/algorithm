function solution(prices) {
    var answer = [];
    const n = prices.length;
    
    for (let i = 0; i < n-1; i++) {
        let cnt = 0;
        for (let j = i+1; j < n; j++) {
            cnt++;
            if (prices[j] < prices[i]) {
                break;
            }
        }
        answer.push(cnt);
    }
    answer.push(0);
    return answer;
}