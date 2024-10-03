const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const G = +input[0];
const P = +input[1];
const gates = Array(G+1).fill(false);
let ans = 0;

const lastDocking = Array(G+1).fill(0);
for (let i = 0; i < G+1; i++) {
    lastDocking[i] = i;
}
for (let i = 0; i < P; i++) {
    const g = +input[i+2];
    let docking = false;
    for (let j = lastDocking[g]; j > 0; j--) {
        if (!gates[j]) {
            gates[j] = true;
            docking = true;
            lastDocking[g] = j-1;
            ans++;
            break;
        }
    }
    if (!docking) break;
}

console.log(ans);