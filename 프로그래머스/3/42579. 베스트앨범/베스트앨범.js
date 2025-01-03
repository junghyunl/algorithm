function solution(genres, plays) {
    const songs = {};
    const playCnt = {};
    
    const N = genres.length;
    for (let i = 0; i < N; i++) {
        playCnt[genres[i]] = (playCnt[genres[i]] || 0) + plays[i];
        if (!songs[genres[i]]) songs[genres[i]] = [];
        songs[genres[i]].push([plays[i], i]);
    }
    
    const ans = [];
    
    Object.entries(playCnt).sort((a,b) => b[1]-a[1]).forEach(item => {
        songs[item[0]].sort((a,b) => a[0] === b[0] ? a[1]-b[1] : b[0]-a[0]);
        for (let i = 0, size = Math.min(2, songs[item[0]].length); i < size; i++) {
            ans.push(songs[item[0]][i][1]);
        }
    })
    
    return ans;
}