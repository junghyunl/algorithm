function solution(n) {
    var answer = new Array(n).fill(0);
    answer[1] = 1;
    answer[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        answer[i]= (answer[i-1]+answer[i-2])%1000000007;
    }
    return answer[n];
}