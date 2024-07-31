const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const numbers = input[1].split(' ').map(Number);
const option = input[2].split(' ').map(Number);
const opStr = '+'.repeat(option[0]) + '-'.repeat(option[1]) + '×'.repeat(option[2]) + '÷'.repeat(option[3]);

function cal(a, b, op) {
    switch (op) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '×':
            return a*b;
        case '÷':
            if (a/b < 0) return Math.ceil(a/b);
            return Math.floor(a/b);
    }
}

const answer = new Set();
function bt(total, idx, opt) {
    if (idx === n-1) {
        answer.add(cal(total, numbers[idx], opt));
        return;
    }

    const optArr = Array.from(new Set(opt));
    for (let i = 0; i < optArr.length; i++) {
        bt(cal(total, numbers[idx], optArr[i]), idx+1, opt.slice(0, opt.indexOf(optArr[i])) + opt.slice(opt.indexOf(optArr[i])+1));
    }
}

bt(numbers[0], 1, opStr);
console.log(Math.max(...answer));
console.log(Math.min(...answer));