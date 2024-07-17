function solution(number, k) {
    const stack = [number[0]];
    const n = number.length;
    
    let idx = 1;
    while (k > 0 && idx < n) {
        if (stack[stack.length-1] < number[idx]) {
            stack.pop();
            k--;
            continue;
        }
        stack.push(number[idx++]);
    }
    
    return stack.concat(number.slice(idx).split('')).join('').slice(0, n-k);
}