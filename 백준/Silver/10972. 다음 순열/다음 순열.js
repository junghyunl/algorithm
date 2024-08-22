const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
let numbers = input[1].split(' ').map(Number);

function findArr() {
    for (let i = N-1; i > 0; i--) {
        if (numbers[i - 1] < numbers[i]) {
            let index = i;
            for (let j = i; j < N; j++) {
                if (numbers[j] < numbers[i - 1]) continue;
                if (numbers[j] < numbers[index]) index = j;
            }

            [numbers[i - 1], numbers[index]] = [numbers[index], numbers[i - 1]];
            numbers = numbers.slice(0, i).concat(numbers.slice(i).sort((a, b) => a - b));
            return numbers.join(' ');
        }
    }
    return -1;
}

console.log(findArr());