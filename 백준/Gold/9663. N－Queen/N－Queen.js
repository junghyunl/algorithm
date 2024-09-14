const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const N = +input;
let ans = 0;

let numbers = [];
for (let i = 0; i < N; i++) {
    numbers.push(i);
}

dfs(0);
console.log(ans);

function dfs(depth) {
    for (let i = 0; i < depth-1; i++) {
        if ((depth-1-i) === Math.abs(numbers[i]-numbers[depth-1])) return;
    }
    if (depth === N) {
        ans++;
        return;
    }

    for (let i = depth; i < N; i++) {
        [numbers[i], numbers[depth]] = [numbers[depth], numbers[i]];
        dfs(depth+1);
        [numbers[i], numbers[depth]] = [numbers[depth], numbers[i]];
    }
}
