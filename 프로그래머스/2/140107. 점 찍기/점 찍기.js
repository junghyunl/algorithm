function solution(k, d) {
    let ans = 0, width = Math.floor(d/k);
    for (let i = 1; i <= Math.floor(d/k)+1; i++) {
        ans += width+1;
        while (d**2 < (i*k)**2+(width*k)**2 && width > -1) width--;
    }
    return ans;
}