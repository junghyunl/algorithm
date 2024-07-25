const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const [n, m] = [+input[0], +input[1]];
let fail = [];
if (m > 0) fail = input[2].split(' ').map(a => a.trim());

function upperCount(number) {
    loop: while (number < 10**6+1) {
        const numStr = number.toString();
        const len = numStr.length;
        for (let i = 0; i < len; i++) {
            if (fail.includes(numStr[i])) {
                number += 10**(len-i-1) - +numStr.slice(i+1);
                continue loop;
            }
        }
        return number - n + number.toString().length;
    }
    return 500001;
}
function lowerCount(number) {
    loop: while (number >= 0) {
        const numStr = number.toString();
        const len = numStr.length;
        for (let i = 0; i < len; i++) {
            if (fail.includes(numStr[i])) {
                number -= +numStr.slice(i+1) + 1;
                continue loop;
            }
        }
        return n - number + number.toString().length;
    }
    return 500001;
}
console.log(Math.min(upperCount(n), lowerCount(n), Math.abs(n - 100)));