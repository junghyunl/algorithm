const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const [N, M] = input.split(' ').map(Number);
const ans = Math.min(count(N, 5)-count(M, 5)-count(N-M, 5),count(N, 2)-count(M, 2)-count(N-M, 2));

console.log(ans);

function count(num, divide) {
    let total = 0;
    let a = divide;
    while (Math.floor(num/a) > 0) {
        total += Math.floor(num/a);
        a*=divide;
    }

    return total;
}