function solution(clothes) {
    var answer = 1;
    let dict = {};
    
    for (let i of clothes) {
        dict[i[1]] = (dict[i[1]] || 0) + 1;
    }
    
    for (let i of Object.values(dict)) {
        answer *= i+1;
    }
    
    return answer-1;
}