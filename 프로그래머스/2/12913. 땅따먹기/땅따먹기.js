function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            let maxVal = 0;
            for (let k = 0; k < 4; k++) {
                if (j !== k) {
                    maxVal = Math.max(maxVal, land[i-1][k]);
                }
            }
            land[i][j] += maxVal;
        }
    }
    return Math.max(...land[land.length-1]);
}
