function solution(s) {
    var answer = [];
    s = s.slice(2,s.length-2).split('},{');
    
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split(',').map(Number);
    }
    s.sort((a,b) => {
        return a.length - b.length;
    })
    
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            if (!answer.includes(s[i][j])) {
                answer.push(s[i][j]);
                break;
            }
        }
    }
    
    
    return answer;
}