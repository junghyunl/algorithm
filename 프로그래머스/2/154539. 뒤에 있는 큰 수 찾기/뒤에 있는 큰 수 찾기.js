function solution(numbers) {
    const n = numbers.length;
    var answer = new Array(n).fill(-1);
    const stack = [];
    
    for (let i = 0; i < n-1; i++) {
        stack.push(i);
        if (numbers[i+1] <= numbers[stack[stack.length-1]]) continue;
        const num = numbers[i+1];
        while (num > numbers[stack[stack.length-1]]) {
            answer[stack[stack.length-1]] = num;
            stack.pop();
        }
    }
    
    return answer;
}