function gcd(a,b) {
    if (b%a === 0) return a;
    return gcd(b%a, a);
}

function solution(arr) {
    if (arr.length === 1) return arr[0];
    arr.sort((a,b) => {
        return a-b;
    })
    
    for (let i = 0; i < arr.length-1; i++) {
        arr[i+1] = arr[i]*arr[i+1]/gcd(arr[i],arr[i+1]);
    }
    
    return arr[arr.length-1];
}