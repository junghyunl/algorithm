function solution(sequence, k) {
    sequence.unshift(0);
    const n = sequence.length;
    var answer = [0,n];
    
    for (let i = 1; i < n; i++) {
        sequence[i] += sequence[i-1]
    }
    
    let [i,j] = [1,0];
    while (j < i && i < n) {
        if (sequence[i] - sequence[j] > k) j++;
        else {
            if (sequence[i] - sequence[j] === k && i-j < answer[1]-answer[0]+1) {
            answer = [j,i-1];
            }
            i++;
        }
    }
    
    return sequence[0] === k ? [0,0] : answer;
}