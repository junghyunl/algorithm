const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//  /dev/stdin

function solution(a, b, c) {
    let answer = BigInt(1);
    a = a%c;
    while (b > 0) {
        if (b%BigInt(2) === BigInt(1)) answer = answer*a%c;
        b = b/BigInt(2);
        a = a*a%c;
    }
    return parseInt(answer);
}

console.log(solution(BigInt(input[0]), BigInt(input[1]), BigInt(input[2])));