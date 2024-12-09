function solution(w, h) {
    if (w%h === 0 || h%w === 0) return w*h-Math.max(w,h);
    
    const gcd = (a,b) => {
        if (a%b === 0) return b;
        return gcd(b, a%b);
    }
    
    return w*h-Math.max(w,h)-Math.min(w,h)+gcd(w,h);
}