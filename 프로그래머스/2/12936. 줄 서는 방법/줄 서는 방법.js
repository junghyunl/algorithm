function solution(n, k) {
    
    const input = [];
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        input.push(i);
        fac *= i;
    }
    
    const numbers = [];
    k--;
    for (let i = n; i > 1; i--) {
        fac /= i;
        const idx = Math.floor(k/fac);
        numbers.push(input.splice(idx, 1)[0]);
        k %= fac;
    }
    numbers.push(input[0]);
    
    return numbers;
}