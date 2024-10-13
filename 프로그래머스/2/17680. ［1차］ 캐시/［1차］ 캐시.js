function solution(cacheSize, cities) {
    var answer = 0;
    let arr = new Array(cacheSize).fill('');
    
    for (let i of cities) {
        if (arr.includes(i.toLowerCase())) {
            arr.splice(arr.indexOf(i.toLowerCase()),1);
            arr.push(i.toLowerCase());
            answer++;
            continue;
        }
        answer += 5;
        arr.shift();
        arr.push(i.toLowerCase());
    }
    
    return cacheSize === 0 ? 5*cities.length : answer;
}