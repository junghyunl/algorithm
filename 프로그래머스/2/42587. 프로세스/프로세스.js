function solution(priorities, location) {
    var answer = 0;
    let orderArr = [];
    
    for (let i = 0; i < priorities.length**2; i++) {
        if (priorities[i%priorities.length] === Math.max(...priorities)) {
            orderArr.push(i%priorities.length);
            priorities[i%priorities.length] = 0;
        }
    }
    answer = orderArr.slice(0,priorities.length).indexOf(location)+1;
    return answer;
}