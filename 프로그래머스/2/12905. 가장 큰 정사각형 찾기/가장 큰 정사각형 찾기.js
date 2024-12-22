function solution(board)
{
    const [N, M] = [board.length, board[0].length];
    
    let ans = board[0][0];
    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            if (board[i][j] === 0) continue;
            board[i][j] = Math.min(board[i][j-1], board[i-1][j], board[i-1][j-1])+1;
            ans = Math.max(ans, board[i][j]);
        }
    }

    return ans**2;
}