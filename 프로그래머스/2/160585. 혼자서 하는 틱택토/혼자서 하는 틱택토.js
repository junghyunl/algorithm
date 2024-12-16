function solution(board) {
    
    const check = (op) => {
        for (let i = 0; i < 3; i++) {
            if ((board[i][0] === op && board[i][1] === op && board[i][2] === op) || 
                (board[0][i] === op && board[1][i] === op && board[2][i] === op)) return true;
        }
        if ((board[0][0] === op && board[1][1] === op && board[2][2] === op) || 
            (board[0][2] === op && board[1][1] === op && board[2][0] === op)) return true;
        return false;
    }
    
    const count = Array(2).fill(0);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') count[0]++;
            else if (board[i][j] === 'X') count[1]++;
        }
    }
    
    if (count[1] > count[0] || count[0] > count[1]+1 || (check('O') && count[1] >= count[0]) || (check('X') && count[0] > count[1])) return 0;
    return 1;
}