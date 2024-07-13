const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//  /dev/stdin

function solution(a, b) {
    let answer = -1;
    
    const queue = [[a, 0]];
    while (queue.length > 0) {
        const [num, cnt] = queue.shift();
        if (num === b) {
            answer = cnt+1;
            break;
        }
        if (num*2 <= b) queue.push([num*2, cnt+1]);
        if (+(num.toString()+'1') <= b)  queue.push([+(num.toString()+'1'), cnt+1]);
    }

    return answer;
}

console.log(solution(input[0],input[1]));