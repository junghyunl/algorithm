function solution(k, dungeons) {
    var answer = 0;
    let arr = [];
    
    const n = dungeons.length;
    function bt(path, option) {
        if (path.length === n) {
            arr.push(path);
            return
        }
        for (let i = 0; i < option.length; i++) {
            let newPath = [...path, option[i]];
            let newOption = option.slice(0,i).concat(option.slice(i+1));
            bt(newPath, newOption);
        }
    }
    bt([], dungeons);
    
    const m = arr.length;
    for (let i = 0; i < m; i++) {
        let heart = k;
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (heart >= arr[i][j][0]) {
                heart -= arr[i][j][1];
                cnt++;
            }
        }
        answer = Math.max(cnt, answer);
    }
    
    return answer;
}