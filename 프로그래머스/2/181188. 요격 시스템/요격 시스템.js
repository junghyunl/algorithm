function solution(targets) {
    
    targets.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    let ans = 0, left = 0, right = 0;
    targets.forEach(item => {
        if (item[0] > right-1) {
            right = item[1];
            ans++;
        } else {
            right = Math.min(right, item[1]);
        }
        left = item[0];
    })
    return ans;
}