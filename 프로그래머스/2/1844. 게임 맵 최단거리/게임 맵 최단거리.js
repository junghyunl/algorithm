function solution(maps) {
    let queue = [[0,0]],
        dx = [-1,1,0,0],
        dy = [0,0,-1,1],
        nx, ny, x, y;
    
    while (queue.length > 0) {
        [x, y] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            nx = x + dx[i];
            ny = y + dy[i];
            if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) continue;
            if (maps[nx][ny] === 0) continue;
            if (maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx,ny]);
            }
            if (nx === maps.length-1 && ny === maps[0].length-1) return maps[maps.length-1][maps[0].length-1];
        }
    }
    return maps[maps.length-1][maps[0].length-1] === 1 ? -1 : maps[maps.length-1][maps[0].length-1];
}