function solution(k, ranges) {
    const numbers = [k];
    while (k > 1) {
        if (k%2 === 0) k /= 2;
        else k = k*3+1;
        numbers.push(k);
    }
    
    const N = numbers.length-1, arr = Array(N).fill(0);
    for (let i = 1; i <= N; i++) {
        arr[i] = arr[i-1] + (numbers[i]+numbers[i-1])/2;
    }
    
    const ans = [];
    ranges.forEach(i => {
        if (N+i[1] < i[0]) ans.push(-1);
        else ans.push(arr[N+i[1]] - arr[i[0]]);
    })
    return ans;
}