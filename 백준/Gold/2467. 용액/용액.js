const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);

let first = numbers[0];
let second = numbers[1];
let gap = Math.abs(first + second);

for (let i = 0; i < N-1; i++) {
    if (gap === 0) break;

    let tmp = binarySearch(i+1, -numbers[i]);
    if (tmp > i+1 && Math.abs(numbers[tmp-1] + numbers[i]) < Math.abs(numbers[tmp] + numbers[i])) tmp--;
    if (Math.abs(numbers[tmp] + numbers[i]) < gap) {
        gap = Math.abs(numbers[tmp] + numbers[i]);
        first = numbers[i];
        second = numbers[tmp];
    }
}

console.log(first + ' ' + second);

function binarySearch(from, target) {
    let start = from;
    let end = N-1;

    while (start <= end) {
        const mid = Math.floor((start+end)/2);
        if (numbers[mid] === target) return mid;
        else if (numbers[mid] < target) {
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }
    return start === N ? start-1 : start;
}