function solution(n,a,b)
{
    var answer = 1;

    while (Math.floor((a+1)/2) !== Math.floor((b+1)/2)) {
        answer++;
        a = Math.floor((a+1)/2);
        b = Math.floor((b+1)/2);
    }

    return answer;
}