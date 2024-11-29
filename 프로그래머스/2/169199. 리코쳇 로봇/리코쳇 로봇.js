function solution(board) {
    board = board.map((a) => a.split(""));
    const [N, M] = [board.length, board[0].length];
    
    const dy = [-1,1,0,0];
    const dx = [0,0,-1,1];
    const queue = [];
    let idx = 0, ans = -1;
    
    loop:
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 'R') {
                board[i][j] = 0;
                queue.push([i, j]);
                break loop;
            }
        } 
    }
    
    loop:
    while (idx < queue.length) {
        const [y, x] = queue[idx++];
        
        for (let i = 0; i < 4; i++) {
            let [ny, nx] = [y+dy[i], x+dx[i]];
            if (ny < 0 || ny >= N || nx < 0 || nx >= M || board[ny][nx] === 'D') continue;
            
            while (true) {
                ny += dy[i];
                nx += dx[i];
                if (ny < 0 || ny >= N || nx < 0 || nx >= M || board[ny][nx] === 'D') {
                    if (board[ny-dy[i]][nx-dx[i]] === '.') {
                        board[ny-dy[i]][nx-dx[i]] = board[y][x]+1;
                        queue.push([ny-dy[i], nx-dx[i]]);
                    } else if (board[ny-dy[i]][nx-dx[i]] === 'G') {
                        ans = board[y][x]+1;
                        break loop;
                    }
                    break;
                }
            }
        }
    }
    return ans;
}