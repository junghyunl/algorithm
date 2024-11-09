function solution(elements) {
    var answer = [];
    elements = elements.concat(elements);
    
    for (let i = 1; i < elements.length/2; i++) {
        for (let j = 0; j < elements.length/2; j++) {
            answer.push(elements.slice(j,j+i).reduce((a,b) => a+b,0));
        }
    }
    answer = Array.from(new Set(answer));
    return answer.length + 1;
}