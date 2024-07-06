function solution(topping) {
    var answer = 0;
    let total = 0;
    let totalTopping = {};
    
    const n = topping.length;
    for (let i = 0; i < n; i++) {
        if (!totalTopping[topping[i]]) {
            totalTopping[topping[i]] = 1;
            total++;
            continue;
        }
        totalTopping[topping[i]]++;
    }
    
    let cnt = 0;
    let countTopping = {};
    for (let i = 0; i < n; i++) {
        totalTopping[topping[i]]--;
        if (totalTopping[topping[i]] === 0) total--;
        if (!countTopping[topping[i]]) {
            countTopping[topping[i]] = 1;
            cnt++;
        }
        if (cnt === total) answer++;
        if (cnt > total) break;
    }
    return answer; 
}