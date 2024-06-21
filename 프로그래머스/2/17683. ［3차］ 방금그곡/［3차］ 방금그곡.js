function solution(m, musicinfos) {
    var answer = '(None)';
    const len = m.length;
    const mCount = m.split('#').join('').length;
    
    function minute(a,b) {
        return (+b.split(':')[0]*60 + +b.split(':')[1])-(+a.split(':')[0]*60 + +a.split(':')[1]);
    }
    function findMusic(s, num) {
        if (s[len%num] === '#') return false;
        for (let i = 0; i < len; i++) {
            if (m[i] !== s[i%num]) return false;
        }
        return true;
    }
    musicinfos = musicinfos.map(a => a.split(',')).sort((a,b) => minute(b[0],b[1])-minute(a[0],a[1]));
    
    loop: for (let i of musicinfos) {
        if (mCount > minute(i[0],i[1])) continue;
        const n = i[3].length;
        let count = minute(i[0],i[1])-mCount+1;
        for (let j = 0; j < n; j++) {
            if (i[3][j] === '#') continue;
            if (count === 0) break;
            if (i[3][j] === m[0] && findMusic(i[3].slice(j) + i[3].slice(0,j), n)) {
                answer = i[2];
                break loop;
            }
            count--;
        }
    }
    
    return answer;
}