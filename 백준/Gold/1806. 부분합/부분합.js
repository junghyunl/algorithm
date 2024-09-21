const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let left = 0, sum = 0, ans = Infinity;
for (let i = 0; i < N; i++) {
    sum += numbers[i];
    
    while (sum - numbers[left] >= S) {
        sum -= numbers[left];
        left++;
    }

    if (sum >= S) ans = Math.min(ans, i-left+1);
}
console.log(ans === Infinity ? 0 : ans);