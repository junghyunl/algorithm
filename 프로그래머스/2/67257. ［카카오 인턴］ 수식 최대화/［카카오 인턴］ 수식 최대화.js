function solution(expression) {
    var answer = [];
    const options = [['+','-','*'],['+','*','-'],['-','+','*'],['-','*','+'],['*','-','+'],['*','+','-']];
    const nums = expression.split(/[\+\-\*]/g).map(Number);
    const ops = expression.split(/[0-9]/g).filter(Boolean);
    
    function cal(a,b,c) {
        if (c === '*') return a*b;
        if (c === '-') return -a+b;
        if (c === '+') return a+b;
    }
    
    function calcul(arr) {
        let a = nums.slice();
        let b = ops.slice();
        
        for (let i of arr) {
            let stack = [a[0]];
            for (let j = 0; j < b.length; j++) {
                stack.push(a[j+1]);
                if (b[j] === i) {
                    stack.push(cal(stack.pop(), stack.pop(), i));
                }
            }
            a = stack.slice();
            b = b.filter(value => value !== i);
        }
        return Math.abs(a[0]);
    } 
    
    for (let i = 0; i < 6; i++) {
        answer.push(calcul(options[i]));
    }
    
    return Math.max(...answer);
}