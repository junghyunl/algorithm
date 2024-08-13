const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const powers = input.slice(1).map(a => a.split(' ').map(Number));
let minValue = Infinity;

function calPower(idx, path) {
    let total = [0, 0];
    path.forEach(a => {
        total[0] += powers[idx][a] + powers[a][idx];
    });
    for (let i = 0; i < n; i++) {
        if (!path.includes(i)) total[1] += powers[idx][i] + powers[i][idx];
    } 
    return total;
}

function bt(start, link, sTotal, lTotal) {
    if (start.length === n/2) {
        minValue = Math.min(minValue, Math.abs(sTotal - lTotal));
        return;
    }

    for (let i = 0; i < link.length; i++) {
        const powerValue = calPower(link[i], start);
        bt(start.concat(link[i]), link.slice(i+1), sTotal+powerValue[0], lTotal-powerValue[1]);
        
    }
}
const numbers = [];
let total = 0;
for (let i = 0; i < n; i++) {
    numbers.push(i);
    total += powers[i].reduce((a,b) => a+b);
}


bt([0], numbers.slice(1), 0, total-calPower(0, [0])[1]);
console.log(minValue);