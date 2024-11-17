function solution(k, tangerine) {
    var answer = 0;
    let dict = {};
    
    for (i of tangerine) {
        dict[i] = (dict[i] || 0) + 1;
    }
    
    let arr = Object.values(dict).sort((a,b) => {
        return a-b;
    })
    
    while (k > 0) {
        answer++;
        k -= arr.pop();
    }
    
    return answer;
}