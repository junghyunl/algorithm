function solution(arrayA, arrayB) {
    const N = arrayA.length;
    
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a%b);
    }
    
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    for (let i = 1; i < N; i++) {
        if (gcdA === 1) break;
        if (gcdA < arrayA[i]) gcdA = gcd(arrayA[i], gcdA);
        else gcdA = gcd(gcdA, arrayA[i]);
    }
    for (let i = 1; i < N; i++) {
        if (gcdB === 1) break;
        if (gcdB < arrayB[i]) gcdB = gcd(arrayB[i], gcdB);
        else gcdB = gcd(gcdB, arrayB[i]);
    }
    
    for (let i = 0; i < N; i++) {
        if (arrayA[i]%gcdB === 0) {
            gcdB = 0;
            break;
        }
    }
    for (let i = 0; i < N; i++) {
        if (arrayB[i]%gcdA === 0) {
            gcdA = 0;
            break;
        }
    }
    return Math.max(gcdA, gcdB);
}