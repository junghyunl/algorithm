function solution(n) {
    var answer = new Array(n);
    for (let i = 0; i < n; i++) {
        answer[i] = new Array(i+1).fill(-1);
    }
    
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    
    const dx = [1,0,-1];
    const dy = [0,1,-1];
    let [x,y] = [0,0];
    answer[0][0] = 1;
    
    let idx = 0;
    while (total > 1) {
        const nx = x + dx[idx];
        const ny = y + dy[idx];
        
        if (nx < 0 || nx >= n || ny < 0 || ny >= answer[nx].length || answer[nx][ny] > 0) {
            idx = (idx+1)%3;
            continue;
        }
        if (answer[nx][ny] === -1) {
            answer[nx][ny] = answer[x][y] + 1;
            [x,y] = [nx,ny];
            total--;
        }
    }
       
    return answer.flat();
}