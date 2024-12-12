function solution(r1, r2) {
    let ans = 0, width = r2;
    for (let i = 1; i <= r2; i++) {
        ans += width;
        while (r2**2 < i**2+width**2 && width > 0) width--;
    }
    width = r1;
    for (let i = 0; i < r1; i++) {
        while (r1**2 <= i**2+width**2 && width > 0) width--;
        ans -= width;
    }
    return ans*4;
}