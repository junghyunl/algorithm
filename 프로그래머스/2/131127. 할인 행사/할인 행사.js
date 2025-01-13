function solution(want, number, discount) {
    var answer = 0;
    let count;
    for (let i = 0; i < discount.length; i++) {
        if(!want.includes(discount[i])) continue;
        count = [...number];
        for (let j = i; j < i+number.reduce((a,b)=>a+b,0); j++) {
            if(!want.includes(discount[j])) {
                i = j;
                break;
            }
            count[want.indexOf(discount[j])]--;
        }
        if (count[0] === 0 && new Set(count).size === 1) answer++;
    }
    return answer;
}