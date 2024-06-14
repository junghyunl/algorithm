function solution(record) {
    let nickName = {};
    let inOut = [];
    
    const n = record.length;
    for (let i = 0; i < n; i++) {
        const info = record[i].split(' ');
        if (info[0] === 'Enter') {
            inOut.push([info[1], 1]);
            nickName[info[1]] = info[2];
            continue;
        }
        if (info[0] === 'Leave') {
            inOut.push([info[1], 0]);
            continue;
        }
        if (info[0] === 'Change') {
            nickName[info[1]] = info[2];
        }
    }
    
    let result = [];
    const m = inOut.length;
    for (let i = 0; i < m; i++) {
        if (inOut[i][1] === 1) {
            result.push(nickName[inOut[i][0]] + '님이 들어왔습니다.');
            continue;
        }
        if (inOut[i][1] === 0) {
            result.push(nickName[inOut[i][0]] + '님이 나갔습니다.');
        }
    }
    return result;
}