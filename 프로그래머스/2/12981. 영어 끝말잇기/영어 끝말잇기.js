function solution(n, words) {
    var answer = [];
    
    for (let i = 1; i < words.length; i++) {
        if(words.slice(0,i).includes(words[i]) || words[i-1][words[i-1].length - 1] !== words[i][0]) {
            answer.push(i%n+1);
            answer.push(Math.floor(i/n)+1);
            break;
        }
    }

    return answer.length === 0 ? [0,0] : answer;
}