const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const powers = input.slice(1).map(a => a.split(' ').map(Number));
let minValue = Infinity;

function calPower(team) {
    let total = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = i + 1; j < team.length; j++) {
            total += powers[team[i]][team[j]] + powers[team[j]][team[i]];
        }
    }
    return total;
}

function bt(start, team1, team2) {
    if (team1.length === n / 2 && team2.length === n / 2) {
        const power1 = calPower(team1);
        const power2 = calPower(team2);
        minValue = Math.min(minValue, Math.abs(power1 - power2));
        return;
    }
    
    if (team1.length < n / 2) {
        bt(start + 1, team1.concat(start), team2);
    }
    
    if (team2.length < n / 2) {
        bt(start + 1, team1, team2.concat(start));
    }
}

bt(0, [], []);
console.log(minValue);