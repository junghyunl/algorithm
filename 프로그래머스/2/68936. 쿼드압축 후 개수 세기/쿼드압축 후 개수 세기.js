const answer = [0, 0];

function solution(arr) {
 
    function dfs(y, x, len) {
        if (len === 1) {
            answer[arr[y][x]]++;
            return;
        }
        
        if (check(y, x, len, arr[y][x])) {
            answer[arr[y][x]]++;
            return;
        } else {
            const newLen = Math.floor(len/2);
            dfs(y, x, newLen);
            dfs(y+newLen, x, newLen);
            dfs(y, x+newLen, newLen);
            dfs(y+newLen, x+newLen, newLen);
        }
    }
    
    function check(y, x, len, num) {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (arr[y+i][x+j] !== num) return false;
            }
        }
        return true;
    }
    
    dfs(0, 0, arr[0].length);
    
    return answer;
}