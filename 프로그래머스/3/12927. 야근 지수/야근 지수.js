function solution(n, works) {
    
    let ans = 0;
    const maxWorkTime = binarySearch(works, n);
    
    works.forEach(item => {
        if (item > maxWorkTime) {
            ans += maxWorkTime**2;
            n -= item - maxWorkTime;
        } else {
            ans += item**2;
        }
    })
    
    return maxWorkTime === 0 ? ans : ans - (maxWorkTime**2 - (maxWorkTime-1)**2)*n;
}

function binarySearch(arr, n, start = 0, end = 50000) {
    
    let result = 0;
    
    while (start <= end) {
        const mid = Math.floor((start+end)/2);
        
        if (count(arr, mid) > n) {
            start = mid + 1;
        } else {
            result = mid;
            end = mid - 1;
        }
    }
    
    return result;
}
    
function count(arr, num) {
    
    let total = 0;
    
    arr.forEach(item => {
        if (item > num) total += item - num;
    })
    
    return total;
}