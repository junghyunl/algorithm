const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

let str = input[0].trim();
const bomb = input[1].trim();
const [N, M] = [str.length, bomb.length];
const stack = [];

for (let i = 0; i < N; i++) {
    if (stack[stack.length - 1] === bomb[M - 1]) {
        if (stack.slice(-M).join('') === bomb) {
            for (let i = 0; i < M; i++) {
                stack.pop();
            }
        }
    }
    stack.push(str[i]);
}
if (stack[stack.length - 1] === bomb[M - 1]) {
    if (stack.slice(-M).join('') === bomb) {
        for (let i = 0; i < M; i++) {
            stack.pop();
        }
    }
}
console.log(stack.length === 0 ? 'FRULA' : stack.join(''));
