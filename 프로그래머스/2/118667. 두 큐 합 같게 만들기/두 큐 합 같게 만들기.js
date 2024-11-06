const solution = (queue1, queue2) => {
    const N = queue1.length;
    let sum1 = queue1.reduce((a,b) => a+b);
    let sum2 = queue2.reduce((a,b) => a+b);
    const newQueue = queue2.slice();
    queue2 = queue2.concat(queue1);
    queue1 = queue1.concat(newQueue);
    
    let left = 0, right = 0;
    let answer = -1;
    
    while (left < 2*N && right < 2*N) {
        if (sum1 === sum2) {
            answer = left + right;
            break;
        } else if (sum1 < sum2) {
            sum1 += queue2[right];
            sum2 -= queue2[right];
            right++;
        } else {
            sum1 -= queue1[left];
            sum2 += queue1[left];
            left++;
        }
    }
    
    return answer;
}