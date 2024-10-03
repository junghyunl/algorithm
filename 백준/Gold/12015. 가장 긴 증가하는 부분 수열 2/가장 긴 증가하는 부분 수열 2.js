const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map(Number);
const cnt = Array(N).fill(0);
let size = 0;
cnt[size++] = numbers[0];

for (let i = 1; i < N; i++) {
    let tmp = binarySearch(cnt, size, numbers[i]);
    tmp = Math.abs(tmp)-1;
    cnt[tmp] = numbers[i];
    if (tmp == size) {
        size++;
    }
}

console.log(size);

function binarySearch(arr, to, target) {
    let start = 0;
    let end = to - 1;

    while (start <= end) {
        const mid = Math.floor((start+end)/2);

        if (arr[mid] === target) {
            return mid+1;
        } else if (arr[mid] < target) {
            start = mid+1;
        }else {
            end = mid-1;
        }
    }
    return -(start+1);
}