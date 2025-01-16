function solution(n, build_frame) {
    
    const column = Array.from({length:n+1}, () => Array(n+1).fill(false));
    const beam = Array.from({length:n+1}, () => Array(n+1).fill(false));
    
    const canBuildColumn = (y, x) => {
        return y == 0 || column[y-1][x] || beam[y][x-1] || beam[y][x];
    }
    
    const canBuildBeam = (y, x) => {
        return column[y-1][x] || column[y-1][x+1] || (beam[y][x-1] && beam[y][x+1]);
    }
    
    const canDeleteColumn = (y, x) => {
        if ((column[y+1][x] && !canBuildColumn(y+1, x)) ||
            (beam[y+1][x-1] && !canBuildBeam(y+1, x-1)) ||
            (beam[y+1][x] && !canBuildBeam(y+1, x))) return false;
        return true;
    }
    
    const canDeleteBeam = (y, x) => {
        if ((column[y][x] && !canBuildColumn(y, x)) ||
            (column[y][x+1] && !canBuildColumn(y, x+1)) ||
            (beam[y][x-1] && !canBuildBeam(y, x-1)) ||
            (beam[y][x+1] && !canBuildBeam(y, x+1))) return false;
        return true;
    }
    
    build_frame.forEach(([x,y,a,b]) => {
        if (b == 0) { // 삭제
            if (a == 0) { // 기둥
                column[y][x] = false;
                if (!canDeleteColumn(y,x)) column[y][x] = true;
            } else { // 보
                beam[y][x] = false;
                if (!canDeleteBeam(y,x)) beam[y][x] = true;
            }
        } else { // 설치
            if (a == 0) { // 기둥
                if (canBuildColumn(y,x)) column[y][x] = true;
            } else { // 보
                if (canBuildBeam(y,x)) beam[y][x] = true;
            }
        }
    })
    
    const ans = [];
    
    for (let i = 0; i < n+1; i++) {
        for (let j = 0; j < n+1; j++) {
            if (column[j][i]) ans.push([i,j,0]);
            if (beam[j][i]) ans.push([i,j,1]);
        }
    }
    
    return ans;
}