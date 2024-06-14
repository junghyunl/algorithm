function solution(m, n, board) {
    var answer = 0;
    let block = Array.from({length: n}, () => []);
    for (let i of board) {
        for (let j = 0; j < n; j++) {
            block[j].unshift(i[j]);
        }
    }
    function toS(a, b) {
        return a.toString() + ' ' + b.toString();
    }
    while (true) {
        let checkBlock = [];
        for (let i = 0; i < n-1; i++) {
            for (let j = 0; j < block[i].length-1; j++) {
                if (block[i][j] && block[i][j] === block[i][j+1] && block[i][j+1] === block[i+1][j] && block[i+1][j] === block[i+1][j+1]) {
                    checkBlock.push(toS(i,j));
                    checkBlock.push(toS(i,j+1));
                    checkBlock.push(toS(i+1,j));
                    checkBlock.push(toS(i+1,j+1));
                }
            }
        }
        if (checkBlock.length === 0) break;
        checkBlock = Array.from(new Set(checkBlock));
        const cnt = checkBlock.length;
        answer += cnt;
        for (let i = 0; i < cnt; i++) {
            checkBlock[i] = checkBlock[i].split(' ').map(Number);
        }
        checkBlock.sort((a,b) => b[1] - a[1]);
        checkBlock.forEach( k => block[k[0]].splice(k[1],1));
    }
    return answer;
}