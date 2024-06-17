function solution(n) {
    var answer = 0;
    let total = [0];
    for (let i = 1; i <= n; i++) {
        total.push(total[i-1] + i);
    }
    for (let i = 0; i < n; i++) {
        for (let j = i+1;  j <= n; j++) {
            if (total[j] - total[i] === n) {
                answer++;
                break;
            }
            else if (total[j] - total[i] > n) break;
        }
    }
    
    return answer;
}