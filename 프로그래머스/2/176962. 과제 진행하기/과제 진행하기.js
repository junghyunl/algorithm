function solution(plans) {
    
    const getStartTime = (clock) => {
        const time = clock.split(':').map(Number);
        return time[0]*60 + time[1];
    }
    
    plans.sort((a,b) => getStartTime(a[1]) - getStartTime(b[1]));
    
    const stack = [], ans = [];
    
    const N = plans.length;
    let now = 0;
    for (let i = 0; i < N-1; i++) {
        now = getStartTime(plans[i][1]);
        stack.push([plans[i][0], +plans[i][2]]);
        while (stack.length > 0) {
            const task = stack.pop();
            if (now + task[1] <= getStartTime(plans[i+1][1])) {
                now += task[1];
                ans.push(task[0]);
            } else {
                task[1] = now + task[1] - getStartTime(plans[i+1][1]);
                stack.push(task);
                break;
            }
        }
    }
    ans.push(plans[N-1][0]);
    while (stack.length > 0) {
        ans.push(stack.pop()[0]);
    }
    
    return ans;
}