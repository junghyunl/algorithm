

function solution(rows, columns, queries) {
    const map = Array.from({length:rows}, () => Array(columns));
    const ans = [];
    
    let num = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            map[i][j] = num++;
        }
    }
    
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    
    const rotate = (y1, x1, y2, x2) => {
        const num = map[y1][x1];
        
        let idx = 0;
        let [y, x] = [y1, x1];
        let minNum = num;
        while (true) {
            const [ny,nx] = [y+dy[idx], x+dx[idx]];
            if(ny < y1 || ny > y2 || nx < x1 || nx > x2) {
                idx++;
                continue;
            }
            if (ny === y1 && nx === x1) break;
            map[y][x] = map[ny][nx];
            [y, x] = [ny, nx];
            minNum = Math.min(minNum, map[y][x]);
        }
        map[y1][x1+1] = num;
        
        ans.push(minNum);
    }
    
    queries.forEach(i => {
        rotate(i[0]-1,i[1]-1,i[2]-1,i[3]-1);
    })
    
    
    return ans;
}