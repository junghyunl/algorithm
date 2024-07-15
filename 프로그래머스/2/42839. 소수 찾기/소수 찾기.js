function solution(numbers) {
    var answer = new Set();
    
    function findP(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n%2 === 0) return false;
        for (let i = 3; i <= Math.floor(n**0.5); i+=2) {
            if (n%i === 0) return false;
        }
        return true;
    }
    
    function bt(path, option) {
        if (findP(+path)) answer.add(+path);
        for (let i = 0; i < option.length; i++) {
            bt(path + option[i], option.slice(0,i) + option.slice(i+1));
        }
    }
    bt('', numbers);
    
    return answer.size;
}