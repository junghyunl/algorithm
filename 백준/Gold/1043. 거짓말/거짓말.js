const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const list = input[1].split(' ').slice(1).map(a => +a-1);
const truth = Array(n).fill(false);
for (let i of list) {
    truth[i] = true;
}

const parents = Array(n);
for (let i = 0; i < n; i++) {
    parents[i] = i;
}

const parties = input.slice(2).map(a => a.split(' ').map(a => +a-1));
for (let i = 0; i < m; i++) {
    for (let j = 1; j <= parties[i][0]; j++) {
        union(parties[i][j], parties[i][j+1]);
    }
}

let ans = 0;
for (let i = 0; i < m; i++) {
    if(!truth[find(parties[i][1])]) ans++;
}

console.log(ans);

function find(a) {
    if (parents[a] === a) return a;
    return parents[a] = find(parents[a]);
}

function union(a, b) {
    let [ar, br] = [find(a), find(b)];
    if (ar === br) return false;
    if (truth[ar]) [ar, br] = [br, ar];
    parents[ar] = br;
    return true;
}