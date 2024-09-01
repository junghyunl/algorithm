const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);
let minValue = Infinity;
let maxValue = -Infinity;

bt(0, operators, numbers[0]);

console.log(maxValue + '\n' + minValue);

function bt(depth, option, sum) {
    if (depth === N-1) {
        minValue = Math.min(minValue, sum);
        maxValue = Math.max(maxValue, sum);
        return;
    }
    for (let i = 0; i < 4; i++) {
        if(option[i] > 0) {
            option[i]--;
            bt(depth+1, option, cal(sum, numbers[depth+1], i));
            option[i]++;
        }
    }
}

function cal(sum, num, op) {
    switch (op) {
        case 0:
            return sum+num;
        case 1:
            return sum-num;
        case 2:
            return sum*num;
        case 3:
            return sum < 0 ? -Math.floor(-sum/num) : Math.floor(sum/num);
    }
}