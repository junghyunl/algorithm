function solution(weights) {
    const siso = [[1,1], [2,3], [1,2], [3,2], [3,4], [2,1], [4,3]];
    const weight = Array(1001).fill(0);
    weights.forEach( i => weight[i]++);

    let answer = 0;
    weights.forEach( i => {
        siso.forEach( j => {
            if (i*j[0]/j[1] === Math.floor(i*j[0]/j[1]) && i*j[0]/j[1] <= 1000) {
                answer += weight[i*j[0]/j[1]];
            }
        });
        answer--;
    });
    return answer/2;
}