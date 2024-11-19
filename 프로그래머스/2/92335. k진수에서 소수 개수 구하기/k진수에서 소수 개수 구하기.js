function findP(n) {
    if (n === 1) return false;
    if (n === 2) return true;
    if (n%2 === 0) return false;
    for (let i = 3; i <= Math.floor(n**0.5); i+=2) {
        if (n%i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    var answer = 0; 
    n = n.toString(k).split('0');
    for (let i of n) {
        if (i === '') continue;
        if (findP(Number(i))) answer++;
    }
    return answer;
}