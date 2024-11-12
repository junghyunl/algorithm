function solution(maps) {
    
    const point = Array.from({length:2}, () => []);
    const [N, M] = [maps.length, maps[0].length];
    const map = Array.from({length:N}, () => Array(M).fill(0));
    const q = [];
    const dy = [-1,1,0,0];
    const dx = [0,0,-1,1];
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maps[i][j] === 'S') {
                point[0] = [i,j];
            } else if (maps[i][j] === 'E') {
                point[1] = [i,j];
            } else if (maps[i][j] === 'L') {
                q.push([i, j, 1]);
                map[i][j] = 1;
            } else if (maps[i][j] === 'X'){
                map[i][j] = -1;
            }
        }
    } 
    
    // let idx = 0;
    while (q.length > 0) {
        const [y, x, time] = q.shift();

        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (ny < 0 || ny >= N || nx < 0 || nx >= M || map[ny][nx] !== 0) continue;
            map[ny][nx] = time+1;
            q.push([ny, nx, time+1]);
        }
    }
    return map[point[0][0]][point[0][1]] === 0 || map[point[1][0]][point[1][1]] === 0 ? 
        -1 : map[point[0][0]][point[0][1]] + map[point[1][0]][point[1][1]] -2;
}