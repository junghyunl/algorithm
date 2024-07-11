function solution(dirs) {
    var answer = new Set();
    const n = dirs.length;
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const command = ['L','R','U','D'];
    let [x, y] = [0, 0];
    
    for (let i = 0; i < n; i++) {
        let [nx, ny] = [x + dx[command.indexOf(dirs[i])], y + dy[command.indexOf(dirs[i])]];
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        if (nx !== x) {
            answer.add((x + nx).toString() + '.' + y.toString() + 'x');
        } else if (ny !== y) {
            answer.add((y + ny).toString() + '.' + x.toString() + 'y');
        }
        
        [x, y] = [nx, ny];
    }
    
    return answer.size;
}