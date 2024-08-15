const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().split('\n');

const n = input.length-1;
let answer = '';
for (let i = 0; i < n; i++) {
    const m = input[i].length;
    let cnt = [0,0,0,0];
    for (let j = 0; j < m; j++) {
        if (input[i][j] === ' ') {
            cnt[3]++;
        }else if (input[i][j] >= '0' && input[i][j] <= '9') {
            cnt[2]++;
        }else if (input[i][j] >= 'a' && input[i][j] <= 'z') {
            cnt[0]++;
        }else if (input[i][j] >= 'A' && input[i][j] <= 'Z') {
            cnt[1]++;
        }
    }
    answer += cnt.join(' ') + '\n';
}

console.log(answer.trim());