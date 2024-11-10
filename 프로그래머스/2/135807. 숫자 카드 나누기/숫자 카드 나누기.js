function solution(arrayA, arrayB) {
    const N = arrayA.length;
    
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a%b);
    }
    
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    for (let i = 1; i < N; i++) {
        if (gcdA < arrayA[i]) gcdA = gcd(arrayA[i], gcdA);
        else gcdA = gcd(gcdA, arrayA[i]);
            
        if (gcdB < arrayB[i]) gcdB = gcd(arrayB[i], gcdB);
        else gcdB = gcd(gcdB, arrayB[i]);
    }
    
    let pos = [true, true];
    for (let i = 0; i < N; i++) {
        if (arrayA[i]%gcdB === 0) {
            pos[0] = false;
            break;
        }
    }
    for (let i = 0; i < N; i++) {
        if (arrayB[i]%gcdA === 0) {
            pos[1] = false;
            break;
        }
    }
    if (pos[0] && pos[1]) return Math.max(gcdA, gcdB);
    else if (!pos[0] && !pos[1]) return 0;
    else if (pos[0]) return gcdB;
    else return gcdA;
}