function solution(triangle) {
    const N = triangle.length-1;
    for (let i = N-1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
        }
    }
    return triangle[0][0];
}