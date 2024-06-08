const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const n = Number(input[0]);
const s = input[1].trim();
const k = s.length;
let arr = [];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
for (let i = 0; i < n; i++) {
    arr.push(Number(input[i+2]));
}

let calcul = [];
for (let i = 0; i < k; i++) {
    if (s[i] === '*') {
        calcul.push(calcul.pop()*calcul.pop());
        continue;
    }
    if (s[i] === '+') {
        calcul.push(calcul.pop()+calcul.pop());
        continue;
    }
    if (s[i] === '-') {
        calcul.push(-calcul.pop()+calcul.pop());
        continue;
    }
    if (s[i] === '/') {
        const [a, b] = [calcul.pop(), calcul.pop()];
        calcul.push(b/a);
        continue;
    }
    calcul.push(arr[alphabet.indexOf(s[i])]);
}
console.log(calcul[0].toFixed(2));