function solution(A, B) {
    
    const N = A.length;
    let left = N-1, right = N-1;
    let ans = 0;
    
    A.sort((a,b) => a-b);
    B.sort((a,b) => a-b);
    
    while (left >= 0 && right >= 0) {
        if (A[left] >= B[right]) {
            left--;
        } else {
            ans++;
            left--;
            right--;
        }
    }
    
    return ans;
}