const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const [n, m] = input[0].split(' ').map(Number);
let knowTruth = new Array(n+1).fill(false);
let relationship = Array.from({length:n+1}, () => []);
const party = input.slice(2).map(a => a.split(' ').map(Number).slice(1));

function countParty() {
    if (+input[1] === 0) return m;

    const stack = input[1].split(' ').map(Number).slice(1);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < party[i].length-1; j++) {
            for (let k = j+1; k < party[i].length; k++) {
                relationship[party[i][j]].push(party[i][k]);
                relationship[party[i][k]].push(party[i][j]);
            }
        }
    }

    while (stack.length > 0) {
        const person = stack.pop();
        if (knowTruth[person]) continue;
        knowTruth[person] = true;

        for (let i of relationship[person]) {
            if (knowTruth[i]) continue;
            stack.push(i);
        }
    }

    let answer = 0;

    for (let i = 0; i < m; i++) {
        if (party[i].every(a => !knowTruth[a])) answer++;
    }
    
    return answer;
}

console.log(countParty());