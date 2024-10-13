const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().split('\n').map(a => a.replace('\r', ''));

let ans = 0;
let index = '';
kmp(input[0], input[1]);
console.log(ans);
if (ans > 0) console.log(index);

function kmp(origin, pattern) {
    const N = pattern.length;
    const M = origin.length;
    const pi = Array(N).fill(0);
    let j = 0;

    for (let i = 1; i < N; i++) {
        while (j>0 && pattern[i] !== pattern[j]) {
            j = pi[j-1];
        }
        if (pattern[i] === pattern[j]) {
            pi[i] = ++j;
        }
    }

    j = 0;
    for (let i = 0; i < M; i++) {
        while (j>0 && origin[i] !== pattern[j]) {
            j = pi[j-1];
        }
        if (origin[i] === pattern[j]) {
            if (j == N-1) {
                ans++;
                index += (i-N+2) + ' ';
                j = pi[j];
            }else {
                j++;
            }
        }
    }
}